import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const prompt = body.prompt || 'Hello, world!';

  const request = {
      model: "gemini-2.5-flash",
      contents: "Explain how AI works in a few words",
  };

  try {
    const response = await ai.models.generateContent(request);
    const text = response.choices[0].text;
    console.log('Generated content:', text);
    return { success: true, response: text };
  } catch (error) {
    const errorMessage = typeof error === 'object' && error !== null && 'message' in error
      ? (error as { message: string }).message
      : String(error);
    return { success: false, error: errorMessage };
  }
});