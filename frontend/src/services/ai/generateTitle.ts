import {
  AIContentRequest,
  AIContentResult,
} from "./types";

import { aiProvider } from "./AIProvider";
import { PromptBuilder } from "./PromptBuilder";

export async function generateTitle(
  request: AIContentRequest
): Promise<AIContentResult> {

  const prompt =
    PromptBuilder.title(request);

  const result =
    await aiProvider.generate(
      "title",
      request,
      prompt
    );

  return {
    ...result,

    content:
      result.content ||
      `🔥 ${request.topic} You Must Watch!`,
  };

}