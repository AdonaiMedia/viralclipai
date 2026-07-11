import {
  AIContentRequest,
  AIContentResult,
} from "./types";

export async function generateCaption(
  request: AIContentRequest
): Promise<AIContentResult> {

  const topic =
    request.topic ||
    request.title ||
    request.transcript ||
    "this topic";

  return {
    success: true,
    content: `Create a viral ${request.platform} caption about ${topic} in ${request.language}.`,
  };

}