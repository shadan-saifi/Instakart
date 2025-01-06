import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
    apiKey : process.env.GOOGLE_GENERATIVE_AI_API_KEY
});

const model = google('gemini-1.5-pro-latest', {
    safetySettings: [
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
    ],
  });