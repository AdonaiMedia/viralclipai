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