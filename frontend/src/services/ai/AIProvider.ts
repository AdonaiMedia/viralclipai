import {
  runOpenAI,
  type AIProviderRequest,
  type AIProviderResponse,
} from "./providers/OpenAIProvider";

import { runGemini } from "./providers/GeminiProvider";

export type AIProviderName =
  | "openai"
  | "gemini";

export async function runAIProvider(
  provider: AIProviderName,
  request: AIProviderRequest
): Promise<AIProviderResponse> {
  switch (provider) {
    case "gemini": {
      const result = await runGemini(request);

      return {
        success: result.success,
        content: result.content,
        provider: result.provider,
        model: result.model,
        tokens: result.tokens,
      };
    }

    case "openai":
    default:
      return runOpenAI(request);
  }
}