import {
  AIContentRequest,
  AIContentResult,
} from "./types";

import { aiProvider } from "./AIProvider";
import { PromptBuilder } from "./PromptBuilder";

export async function generateCaption(
  request: AIContentRequest
): Promise<AIContentResult> {

  const prompt =
    PromptBuilder.caption(request);

  const result =
    await aiProvider.generate(
      "caption",
      request,
      prompt
    );

  return {
    ...result,

    content:
      result.content ||
      `Create a viral ${request.platform} caption about ${request.topic}.`,
  };

}