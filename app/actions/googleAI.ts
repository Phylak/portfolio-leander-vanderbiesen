'use server';

import handleAIPrompt from '@/lib/handleAIPromt';
import { AIModelValue } from '../types';

export async function getGoogleGenAIResponse(
  prompt: string,
  model: string
): Promise<string | null> {
  return handleAIPrompt(prompt, model);
}
