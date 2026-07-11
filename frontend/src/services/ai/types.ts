export interface CaptionRequest {
  topic: string;
  platform: "tiktok" | "youtube" | "instagram" | "facebook";
  language: string;
}

export interface CaptionResponse {
  caption: string;
}

export interface ViralScore {
  score: number;
  strengths: string[];
  improvements: string[];
}
export type SupportedPlatform =
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok";

export type SupportedLanguage =
  | "sw"
  | "en";

export interface AIContentRequest {
  transcript?: string;
  topic: string;
  title?: string;
  platform: SupportedPlatform;
  language: SupportedLanguage;
}

export interface AIContentResult {
  success: boolean;
  content: string;
}