import { GoogleGenerativeAI } from '@google/generative-ai';
const config = useRuntimeConfig();

const genAI = new GoogleGenerativeAI(config.GOOGLE_GEMINI_API_KEY);

export default defineEventHandler(async (event) => {
  console.log('Received request for content generation');
  const body = await readBody(event);
  const prompt = body.prompt || 'Hello, world!'; // Default prompt if none provided

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return { success: true, response: text };
  } catch (error) {
    const errorMessage = typeof error === 'object' && error !== null && 'message' in error
      ? (error as { message: string }).message
      : String(error);
    return { success: false, error: errorMessage };
  }
});