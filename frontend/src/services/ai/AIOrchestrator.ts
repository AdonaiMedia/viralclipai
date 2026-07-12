import { AIContentRequest } from "./types";

import { generateTitle } from "./generateTitle";
import { generateCaption } from "./generateCaption";
import { generateHook } from "./generateHook";
import { generateHashtags } from "./generateHashtags";

export interface AIOrchestratorResult {
  success: boolean;

  title: string;
  caption: string;
  hook: string;
  hashtags: string;

  provider?: string;
  model?: string;
}

export async function runAIOrchestrator(
  request: AIContentRequest
): Promise<AIOrchestratorResult> {

  console.log("================================");
  console.log("AI ORCHESTRATOR");
  console.log("================================");

  const [
    title,
    caption,
    hook,
    hashtags,
  ] = await Promise.all([
    generateTitle(request),
    generateCaption(request),
    generateHook(request),
    generateHashtags(request),
  ]);

  return {
    success: true,

    title: title.content,

    caption: caption.content,

    hook: hook.content,

    hashtags: hashtags.content,

    provider: title.provider,

    model: title.model,
  };
}