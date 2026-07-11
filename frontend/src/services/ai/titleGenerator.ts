import {
  AIContentRequest,
  AIContentResult,
} from "./types";

export async function generateTitle(
  request: AIContentRequest
): Promise<AIContentResult> {

  const topic =
    request.topic ||
    request.title ||
    request.transcript ||
    "Untitled Video";

  return {
    success: true,
    content: `🔥 ${topic} You Must Watch!`,
  };

}