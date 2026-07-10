export type UserIntent =
  | "clips"
  | "captions"
  | "titles"
  | "thumbnail"
  | "translation"
  | "voice"
  | "lipsync"
  | "remove-silence"
  | "intro-outro"
  | "upscale"
  | "publish"
  | "analysis";

export interface RoutingResult {

  intents: UserIntent[];

}

export class IntentRouter {

  route(
    prompt: string
  ): RoutingResult {

    const text = prompt.toLowerCase();

    const intents: UserIntent[] = [];

    if (text.includes("clip"))
      intents.push("clips");

    if (text.includes("caption"))
      intents.push("captions");

    if (text.includes("title"))
      intents.push("titles");

    if (text.includes("thumbnail"))
      intents.push("thumbnail");

    if (text.includes("translate"))
      intents.push("translation");

    if (text.includes("voice"))
      intents.push("voice");

    if (text.includes("lip"))
      intents.push("lipsync");

    if (text.includes("silence"))
      intents.push("remove-silence");

    if (
      text.includes("intro") ||
      text.includes("outro")
    )
      intents.push("intro-outro");

    if (
      text.includes("4k") ||
      text.includes("8k") ||
      text.includes("upscale")
    )
      intents.push("upscale");

    if (
      text.includes("publish")
    )
      intents.push("publish");

    if (
      intents.length === 0
    ) {
      intents.push("analysis");
    }

    return {
      intents,
    };

  }

}