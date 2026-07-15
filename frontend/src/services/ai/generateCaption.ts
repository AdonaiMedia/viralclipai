import {
  AIContentRequest,
  AIContentResult,
} from "./types";

import { runAIProvider } from "./AIProvider";
import { PromptBuilder } from "./PromptBuilder";

export async function generateCaption(
  request: AIContentRequest
): Promise<AIContentResult> {

  const prompt =
    PromptBuilder.caption(request);

  const result =
    await runAIProvider("openai", {
      systemPrompt:
        "You are ViralClip AI. Generate a viral caption.",
      userPrompt: prompt,
      temperature: 0.8,
      maxTokens: 180,
    });

  return {
    success: result.success,
    content:
      result.content ||
      `Create a viral ${request.platform} caption about ${request.topic}.`,
    provider: result.provider,
    model: result.model,
    tokens: result.tokens,
  };
}