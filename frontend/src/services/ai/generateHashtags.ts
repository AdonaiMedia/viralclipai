import {
  AIContentRequest,
  AIContentResult,
} from "./types";

const DEFAULT_HASHTAGS = [
  "#viral",
  "#trending",
  "#shorts",
  "#reels",
  "#fyp",
];

export async function generateHashtags(
  request: AIContentRequest
): Promise<AIContentResult> {

  const text = (
    request.topic ||
    request.title ||
    request.transcript ||
    ""
  ).toLowerCase();

  const hashtags = [...DEFAULT_HASHTAGS];

  if (text.includes("god") || text.includes("mungu")) {
    hashtags.push("#faith", "#god", "#jesus");
  }

  if (text.includes("business")) {
    hashtags.push("#business", "#success");
  }

  if (text.includes("motivation")) {
    hashtags.push("#motivation", "#mindset");
  }

  return {
    success: true,
    content: hashtags.join(" "),
  };
}