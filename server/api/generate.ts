import { GoogleGenAI, Type } from "@google/genai";
const config = useRuntimeConfig();

const ai = new GoogleGenAI({});

export default defineEventHandler(async (event) => {
  console.log('Received request for content generation');
  const body = await readBody(event);
  const prompt = body.prompt || 'Hello, world!';
  const config = {
    model: "gemini-2.5-flash",
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            recipeName: {
              type: Type.STRING,
            },
            ingredients: {
              type: Type.ARRAY,
              items: {
                type: Type.STRING,
              },
            },
          },
          propertyOrdering: ["recipeName", "ingredients"],
        },
      },
    },
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Explain how AI works in a few words",
    });
    console.log(response);

    return { success: true, response };
  } catch (error) {
    const errorMessage = typeof error === 'object' && error !== null && 'message' in error
      ? (error as { message: string }).message
      : String(error);
    return { success: false, error: errorMessage };
  }
});