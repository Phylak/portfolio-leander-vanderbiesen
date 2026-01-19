'use server';

import handleAIPrompt from '@/lib/handleAIPromt';

export async function getGoogleGenAIResponse(
  prompt: string,
  model: string
): Promise<string | null> {
  return handleAIPrompt(prompt, model);
}
