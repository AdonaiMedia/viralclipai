import {
  AIContentRequest,
  AIContentResult,
} from "./types";

import { runAIProvider } from "./AIProvider";
import { PromptBuilder } from "./PromptBuilder";

export async function generateTitle(
  request: AIContentRequest
): Promise<AIContentResult> {

  const prompt =
    PromptBuilder.title(request);

  const result =
    await runAIProvider("openai", {
      systemPrompt:
        "You are ViralClip AI. Generate a viral title.",
      userPrompt: prompt,
      temperature: 0.8,
      maxTokens: 80,
    });

  return {
    success: result.success,
    content:
      result.content ||
      `🔥 ${request.topic} You Must Watch!`,
    provider: result.provider,
    model: result.model,
    tokens: result.tokens,
  };
}