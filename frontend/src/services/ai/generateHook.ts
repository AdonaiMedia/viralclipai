import {
  AIContentRequest,
  AIContentResult,
} from "./types";

import { aiProvider } from "./AIProvider";
import { PromptBuilder } from "./PromptBuilder";

export async function generateHook(
  request: AIContentRequest
): Promise<AIContentResult> {

  const prompt =
    PromptBuilder.hook(request);

  const result =
    await aiProvider.generate(
      "hook",
      request,
      prompt
    );

  return {
    ...result,

    content:
      result.content ||
      "🔥 Wait until the end... this changes everything!",
  };

}