import { AIModelValue } from '@/app/types';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY!;

const tools = [
  {
    googleSearch: {},
  },
];

const config = {
  temperature: 0.15,
  //TODO add thinking level based on chosen model
  // thinkingConfig: {
  //   thinkingLevel: ThinkingLevel.HIGH,
  // },
  tools,
  systemInstruction: [
    {
      text: `You are a Senior Full-Stack Engineer. Review the user's code for security vulnerabilities, Big O complexity, and naming conventions. Return the output in a structured format. If the given content is not a code snippet, give an appropriate answers that the user should provide code and not plain text.`,
    },
  ],
};

const handleAIPrompt = async (
  prompt: string,
  model: string
): Promise<string | null> => {
  const chunks: string[] = [];

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `${prompt}`,
        },
      ],
    },
  ];

  try {
    const ai = new GoogleGenAI({
      apiKey: GOOGLE_AI_API_KEY,
    });
    
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    for await (const chunk of response) {
      if (chunk.text) {
        chunks.push(chunk.text);
      }
    }

    return chunks.join('');
  } catch (error) {
    console.error('Error handling AI prompt:', error);
    return null;
  }
};

export default handleAIPrompt;
