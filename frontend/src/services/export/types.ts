export type ExportPlatform =
  | "youtube"
  | "instagram"
  | "facebook"
  | "tiktok";

export interface ExportJob {
  videoId: number;

  clipId: number;

  inputFile: string;

  outputFile: string;

  platform: ExportPlatform;

  watermark: boolean;
}

export interface ExportResult {
  success: boolean;

  outputFile: string;

  platform: ExportPlatform;

  message: string;
}