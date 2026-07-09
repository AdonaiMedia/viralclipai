export type MissionType =
  | "analysis"
  | "clips"
  | "recap"
  | "translation"
  | "voice-clone"
  | "lip-sync"
  | "thumbnail"
  | "publishing"
  | "campaign";

export interface MissionCommand {
  type: MissionType;
  prompt: string;
}

export function interpretCommand(
  prompt: string
): MissionCommand {

  const text = prompt.toLowerCase();

  if (
    text.includes("clip") ||
    text.includes("clips") ||
    text.includes("short") ||
    text.includes("shorts") ||
    text.includes("reel") ||
    text.includes("reels")
  ) {
    return {
      type: "clips",
      prompt,
    };
  }

  if (
    text.includes("analyze") ||
    text.includes("analysis") ||
    text.includes("inspect")
  ) {
    return {
      type: "analysis",
      prompt,
    };
  }

  if (
    text.includes("thumbnail") ||
    text.includes("cover")
  ) {
    return {
      type: "thumbnail",
      prompt,
    };
  }

  if (
    text.includes("publish") ||
    text.includes("upload") ||
    text.includes("post")
  ) {
    return {
      type: "publishing",
      prompt,
    };
  }

  if (
    text.includes("recap") ||
    text.includes("summary")
  ) {
    return {
      type: "recap",
      prompt,
    };
  }

  if (
    text.includes("translate") ||
    text.includes("translation")
  ) {
    return {
      type: "translation",
      prompt,
    };
  }

  if (
    text.includes("voice clone") ||
    text.includes("clone voice")
  ) {
    return {
      type: "voice-clone",
      prompt,
    };
  }

  if (
    text.includes("lip sync") ||
    text.includes("lipsync")
  ) {
    return {
      type: "lip-sync",
      prompt,
    };
  }

  return {
    type: "analysis",
    prompt,
  };
}