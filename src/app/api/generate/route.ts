import { HfInference } from "@huggingface/inference";
import { NextRequest, NextResponse } from "next/server";

// Initialize the Hugging Face client with your token from the environment variables
const hf = new HfInference(process.env.HUGGINGFACE_API_TOKEN);

// This is a great starting model for our task
const AI_MODEL = "mistralai/Mistral-7B-Instruct-v0.2";

export async function POST(req: NextRequest) {
  try {
    const { prompt, profileData } = await req.json();

    if (!prompt || !profileData) {
      return NextResponse.json(
        { error: "A prompt and profile data are required." },
        { status: 400 }
      );
    }

    // Create a detailed prompt for the AI, giving it context and instructions
    const fullPrompt = `
      [INST] You are an expert assistant helping a business fill out a grant application. 
      Based ONLY on the provided JSON data about the business, answer the question from the form field label.
      If the data does not contain a clear answer, just say "Not found in profile".
      Keep the answer concise and directly relevant to the label. Do not add any conversational text or introductions.

      BUSINESS DATA:
      ${JSON.stringify(profileData, null, 2)}
      
      FORM FIELD LABEL: "${prompt}"
      [/INST]
      ANSWER:
    `;
    
    const response = await hf.textGeneration({
      model: AI_MODEL,
      inputs: fullPrompt,
      parameters: {
        max_new_tokens: 150, // Limit the length of the answer
        temperature: 0.5,
      }
    });

    return NextResponse.json({ generatedText: response.generated_text });

  } catch (error) {
    console.error("Hugging Face API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate AI content." },
      { status: 500 }
    );
  }
}