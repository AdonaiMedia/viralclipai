export type MissionIntent =
  | "clips"
  | "captions"
  | "titles"
  | "thumbnails"
  | "translation"
  | "subtitles"
  | "voiceover"
  | "voiceclone"
  | "upscale"
  | "audio_cleanup"
  | "noise_removal"
  | "silence_removal"
  | "intro"
  | "outro"
  | "branding"
  | "publishing"
  | "analytics"
  | "coaching"
  | "full_pipeline";

export interface UserMission {

  prompt: string;

  intents: MissionIntent[];

  platform?: string;

  language?: string;

}