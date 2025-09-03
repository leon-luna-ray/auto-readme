import { GoogleGenAI, Type } from "@google/genai";

export default defineEventHandler(async (event) => {
  console.log('Received request for content generation');
  
  const config = useRuntimeConfig();
  const apiKey = config.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'GEMINI_API_KEY not configured'
    });
  }
  
  const ai = new GoogleGenAI({ apiKey });
  const body = await readBody(event);
  const prompt = `
  Generate a professional README.md file in Markdown format using the following details:

  Project Title: ${body.title}
  Description: ${body.description}
  Technologies: ${body.technologies}
  App URL: ${body.appUrl}
  Repo URL: ${body.repoUrl}
  Image URL: ${body.imageUrl}

  Structure the README with clear headings such as 'Description', 'Technologies', 'Installation', 'Usage', 'Contributing', and 'License' based on the user's input.
  If provided scan the repository URL for additional information.
  `;


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