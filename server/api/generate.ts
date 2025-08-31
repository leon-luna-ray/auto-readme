import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({});

export default defineEventHandler(async (event) => {
  console.log('Received request for content generation');
  const body = await readBody(event);
  const prompt = body.prompt || 'Hello, world!';

  const request = {
    model: "gemini-2.5-flash",
    contents: prompt,
  };

  try {
    const response = await ai.models.generateContent(request);
    let text;

    if (
      response &&
      Array.isArray(response.candidates) &&
      response.candidates.length > 0 &&
      response.candidates[0]?.content &&
      Array.isArray(response.candidates[0].content.parts) &&
      response.candidates[0].content.parts.length > 0 &&
      typeof response.candidates[0].content.parts[0]?.text === "string"
    ) {
      text = response.candidates[0].content.parts[0].text;
    }

    return { success: true, response: text };
  } catch (error) {
    const errorMessage = typeof error === 'object' && error !== null && 'message' in error
      ? (error as { message: string }).message
      : String(error);
    return { success: false, error: errorMessage };
  }
});