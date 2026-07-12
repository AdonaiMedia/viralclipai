export type SupportedPlatform =
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok";

export type SupportedLanguage =
  | "en"
  | "sw";

export type ContentTone =
  | "professional"
  | "friendly"
  | "funny"
  | "emotional"
  | "educational"
  | "inspirational";

export interface CaptionRequest {
  topic: string;
  platform: SupportedPlatform;
  language: SupportedLanguage;
}

export interface CaptionResponse {
  caption: string;
}

export interface ViralScore {
  score: number;
  strengths: string[];
  improvements: string[];
}

export interface AIContentRequest {
  transcript?: string;

  topic: string;

  title?: string;

  platform: SupportedPlatform;

  language: SupportedLanguage;

  duration?: number;

  creator?: string;

  targetAudience?: string;

  tone?: ContentTone;
}

export interface AIContentResult {
  success: boolean;

  content: string;

  provider: string;

  model: string;

  tokens?: number;
}

export interface AIOrchestratorResult {
  success: boolean;

  title: string;

  hook: string;

  caption: string;

  hashtags: string;

  summary?: string;

  keywords?: string[];

  emotion?: string;

  category?: string;

  targetAudience?: string;

  bestPostingTime?: string;

  callToAction?: string;

  viralScore?: number;
}