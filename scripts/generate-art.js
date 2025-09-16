require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");

const artworksFilePath = path.join(__dirname, '../src/artworks.json');
const uploadsFolderPath = path.join(__dirname, '../public/lovable-uploads');

// Try different models - they may have separate quotas
const MODELS_TO_TRY = [
    'gemini-1.5-flash',      // Different model, may have separate quota
    'gemini-1.5-pro',        // Pro version
    'gemini-2.0-flash-exp',  // Your original (likely exhausted)
];

function fileToGenerativePart(filePath, mimeType) {
    const fileData = fs.readFileSync(filePath);
    return {
        inlineData: {
            data: Buffer.from(fileData).toString("base64"),
            mimeType
        },
    };
}

async function generateArtworkData(imagePath, fileName, model) {
    try {
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
        
        if (!GEMINI_API_KEY) {
            throw new Error("No Gemini API key found!");
        }

        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const generativeModel = genAI.getGenerativeModel({ model: model });

        const imagePart = fileToGenerativePart(imagePath, "image/jpeg");

        const prompt = `Analyze this artwork image and provide a JSON response with:
        - title: A creative, artistic title (not generic)
        - emotion: Primary emotion conveyed (one word)
        - story: A brief artistic description (1-2 sentences)
        - category: Art category (Portrait, Abstract, Contemporary, Digital, etc.)
        
        Return only valid JSON format.`;

        console.log(`🎨 Analyzing ${fileName} with model ${model}...`);
        const result = await generativeModel.generateContent([prompt, imagePart]);
        const response = await result.response;
        const text = response.text();

        // Try to extract JSON from the response
        let jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const artworkData = JSON.parse(jsonMatch[0]);
            console.log(`✅ Generated: "${artworkData.title}" (${artworkData.emotion})`);
            return artworkData;
        } else {
            throw new Error("No valid JSON found in response");
        }

    } catch (error) {
        console.log(`❌ Error analyzing ${fileName} with ${model}:`, error.message);
        return null;
    }
}

async function generateArtworks() {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    
    if (!GEMINI_API_KEY) {
        console.error("❌ No Gemini API key found!");
        process.exit(1);
    }

    console.log("✅ Using Gemini API key:", GEMINI_API_KEY.substring(0, 10) + "...");
    console.log("🚀 Starting artwork generation with multiple models...");

    // Create uploads folder if it doesn't exist
    if (!fs.existsSync(uploadsFolderPath)) {
        console.log("📁 Creating uploads folder...");
        fs.mkdirSync(uploadsFolderPath, { recursive: true });
    }

    // Get all image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const files = fs.readdirSync(uploadsFolderPath)
        .filter(file => imageExtensions.some(ext => 
            file.toLowerCase().endsWith(ext)
        ));

    if (files.length === 0) {
        console.log("⚠️ No images found in uploads folder. Creating sample data...");
        const sampleArtworks = [
            {
                id: 1,
                title: "Digital Dreams",
                image: "/placeholder.svg",
                emotion: "Serene",
                story: "A peaceful journey through digital landscapes.",
                category: "Abstract"
            },
            {
                id: 2,
                title: "Vibrant Expression",
                image: "/placeholder.svg",
                emotion: "Energetic",
                story: "Bold colors dance across the canvas of imagination.",
                category: "Contemporary"
            }
        ];
        fs.writeFileSync(artworksFilePath, JSON.stringify(sampleArtworks, null, 2));
        console.log("✅ Sample artworks.json created with placeholder data");
        return;
    }

    console.log(`🖼️ Found ${files.length} images to process...`);
    const artworks = [];
    let currentModelIndex = 0;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const filePath = path.join(uploadsFolderPath, file);
        
        console.log(`Processing ${i + 1}/${files.length}: ${file}`);
        
        let artworkData = null;
        
        // Try different models until one works
        for (let modelAttempt = 0; modelAttempt < MODELS_TO_TRY.length; modelAttempt++) {
            const model = MODELS_TO_TRY[currentModelIndex];
            artworkData = await generateArtworkData(filePath, file, model);
            
            if (artworkData) {
                // Success! Continue with this model
                break;
            } else {
                // Try next model
                currentModelIndex = (currentModelIndex + 1) % MODELS_TO_TRY.length;
                console.log(`🔄 Switching to model: ${MODELS_TO_TRY[currentModelIndex]}`);
            }
        }

        // If all models failed, create fallback
        if (!artworkData) {
            console.log(`⚠️ All models failed for ${file}, using fallback`);
            artworkData = {
                title: `Artwork ${Date.now()}`,
                emotion: "Mysterious",
                story: "A captivating artwork that invites contemplation.",
                category: "Digital"
            };
        }

        artworks.push({
            id: i + 1,
            title: artworkData.title,
            image: `/lovable-uploads/${file}`,
            emotion: artworkData.emotion,
            story: artworkData.story,
            category: artworkData.category
        });

        // Add delay between requests
        if (i < files.length - 1) {
            console.log("⏳ Waiting 2 seconds...");
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }

    try {
        fs.writeFileSync(artworksFilePath, JSON.stringify(artworks, null, 2));
        console.log(`\n🎉 SUCCESS! Generated ${artworks.length} artworks in artworks.json`);
        console.log(`📄 File saved to: ${artworksFilePath}`);
    } catch (error) {
        console.error("💥 Error saving artwork data:", error.message);
    }
}

generateArtworks().catch(console.error);