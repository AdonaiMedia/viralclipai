import { CaptionRequest } from "./types";

export async function generateCaption(
  request: CaptionRequest
): Promise<string> {

  return `Create a viral ${request.platform} caption about ${request.topic} in ${request.language}.`;
}