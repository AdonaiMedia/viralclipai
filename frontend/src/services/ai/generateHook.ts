import {
  AIContentRequest,
  AIContentResult,
} from "./types";

import { runAIProvider } from "./AIProvider";
import { PromptBuilder } from "./PromptBuilder";

export async function generateHook(
  request: AIContentRequest
): Promise<AIContentResult> {

  const prompt =
    PromptBuilder.hook(request);

  const result =
    await runAIProvider("openai", {
      systemPrompt:
        "You are ViralClip AI. Generate a viral hook.",
      userPrompt: prompt,
      temperature: 0.9,
      maxTokens: 100,
    });

  return {
    success: result.success,
    content:
      result.content ||
      "🔥 Wait until the end... this changes everything!",
    provider: result.provider,
    model: result.model,
    tokens: result.tokens,
  };
}