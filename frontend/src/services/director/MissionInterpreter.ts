import { UserMission, MissionIntent } from "./MissionIntent";

export class MissionInterpreter {

  interpret(prompt: string): UserMission {

    const text = prompt.toLowerCase();

    const intents: MissionIntent[] = [];

    if (
      text.includes("clip") ||
      text.includes("short") ||
      text.includes("reel")
    ) {
      intents.push("clips");
    }

    if (
      text.includes("caption")
    ) {
      intents.push("captions");
    }

    if (
      text.includes("title")
    ) {
      intents.push("titles");
    }

    if (
      text.includes("thumbnail")
    ) {
      intents.push("thumbnails");
    }

    if (
      text.includes("translate")
    ) {
      intents.push("translation");
    }

    if (
      text.includes("subtitle")
    ) {
      intents.push("subtitles");
    }

    if (
      text.includes("4k") ||
      text.includes("8k") ||
      text.includes("upscale")
    ) {
      intents.push("upscale");
    }

    if (
      text.includes("remove silence")
    ) {
      intents.push("silence_removal");
    }

    if (
      text.includes("intro")
    ) {
      intents.push("intro");
    }

    if (
      text.includes("outro")
    ) {
      intents.push("outro");
    }

    if (
      text.includes("publish")
    ) {
      intents.push("publishing");
    }

    if (
      text.includes("coach")
    ) {
      intents.push("coaching");
    }

    if (intents.length === 0) {

      intents.push("full_pipeline");

    }

    return {

      prompt,

      intents,

    };

  }

}