const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const UPLOADS_DIR = path.join(__dirname, '../public/lovable-uploads');
const GENERATE_ART_SCRIPT = path.join(__dirname, 'generate-art.js');

console.log(`Watching for new files in: ${UPLOADS_DIR}`);

// Keep track of files already processed to avoid re-processing on multiple events
const processedFiles = new Set();

fs.watch(UPLOADS_DIR, async (eventType, filename) => {
    if (filename && eventType === 'rename') { // 'rename' event often fires for new files
        const filePath = path.join(UPLOADS_DIR, filename);

        // Give a brief moment for the file to be fully written
        await new Promise(resolve => setTimeout(resolve, 1000)); 

        fs.stat(filePath, (err, stats) => {
            if (err) {
                // console.error(`Error stating file ${filePath}:`, err.message);
                return;
            }

            // Check if it's a file and an image, and not already processed
            if (stats.isFile() && /\.(png|jpe?g|gif|webp)$/i.test(filename) && !processedFiles.has(filename)) {
                console.log(`New image detected: ${filename}. Generating description...`);
                processedFiles.add(filename); // Mark as processed

                exec(`node ${GENERATE_ART_SCRIPT}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error executing generate-art.js: ${error.message}`);
                        // Remove from processedFiles if it failed, so it can be retried
                        processedFiles.delete(filename); 
                        return;
                    }
                    if (stderr) {
                        console.error(`generate-art.js stderr: ${stderr}`);
                    }
                    console.log(`generate-art.js stdout: ${stdout}`);
                    console.log(`Description generation for ${filename} completed.`);
                    
                    // After successful processing, remove from processedFiles after a delay
                    // This allows for potential re-runs if the file changes later, but avoids immediate duplicates
                    setTimeout(() => processedFiles.delete(filename), 5000); 
                });
            }
        });
    }
});

// Initial run to process any existing unprocessed files when the watcher starts
console.log('Performing initial scan for unprocessed artworks...');
exec(`node ${GENERATE_ART_SCRIPT}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error during initial scan by generate-art.js: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`generate-art.js stderr during initial scan: ${stderr}`);
    }
    console.log(`generate-art.js stdout during initial scan: ${stdout}`);
    console.log('Initial scan complete.');
});
