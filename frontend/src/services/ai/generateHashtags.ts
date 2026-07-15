import {
  AIContentRequest,
  AIContentResult,
} from "./types";

import { runAIProvider } from "./AIProvider";
import { PromptBuilder } from "./PromptBuilder";

export async function generateHashtags(
  request: AIContentRequest
): Promise<AIContentResult> {

  const prompt =
    PromptBuilder.hashtags(request);

  const result =
    await runAIProvider("openai", {
      systemPrompt:
        "Generate only hashtags.",
      userPrompt: prompt,
      temperature: 0.6,
      maxTokens: 80,
    });

  return {
    success: result.success,
    content:
      result.content ||
      "#viral #shorts #reels #fyp",
    provider: result.provider,
    model: result.model,
    tokens: result.tokens,
  };
}