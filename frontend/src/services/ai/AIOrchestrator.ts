import { AIContentRequest } from "../services/ai/types";

import { generateTitle } from "../services/ai/titleGenerator";
import { generateCaption } from "../services/ai/captionGenerator";
import { generateHook } from "../services/ai/generateHook";
import { generateHashtags } from "../services/ai/generateHashtags";

export interface AIOrchestratorResult {
  success: boolean;

  title: string;
  caption: string;
  hook: string;
  hashtags: string;
}

export async function runAIOrchestrator(
  request: AIContentRequest
): Promise<AIOrchestratorResult> {

  console.log("================================");
  console.log("AI ORCHESTRATOR");
  console.log("================================");

  const [
    titleResult,
    captionResult,
    hookResult,
    hashtagsResult,
  ] = await Promise.all([
    generateTitle(request),
    generateCaption(request),
    generateHook(request),
    generateHashtags(request),
  ]);

  return {
    success: true,

    title: titleResult.content,

    caption: captionResult.content,

    hook: hookResult.content,

    hashtags: hashtagsResult.content,
  };
}