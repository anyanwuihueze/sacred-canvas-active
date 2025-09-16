import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables from .env file
import { config } from 'dotenv';
config();

const API_KEY = process.env.VITE_GEMINI_API_KEY;

console.log("🔍 Checking API Key...");

if (!API_KEY) {
  console.error("❌ VITE_GEMINI_API_KEY is missing!");
  console.log("Make sure:");
  console.log("1. You have a .env file in your project root");
  console.log("2. It contains: VITE_GEMINI_API_KEY=your_actual_key_here");
  process.exit(1);
}

console.log("✅ API Key found:", API_KEY.replace(/(.{4}).*(.{4})/, "$1...$2"));

async function testGemini() {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);

    // Using gemini-2.5-flash as specified by the user
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    console.log("📡 Sending test request to Gemini using 'gemini-2.5-flash'...");
    const result = await model.generateContent("Say 'Hello from Soulful Canvas' in a poetic way");
    const response = await result.response;
    const text = response.text();

    console.log("🎉 Success! Gemini says:");
    console.log(text);
  } catch (error) {
    console.error("❌ Failed to call Gemini API:", error.message);
    if (error.message.includes("401")) {
      console.log("👉 This usually means your API key is invalid or disabled.");
    }
    process.exit(1);
  }
}

testGemini();
