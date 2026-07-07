export type ProcessingStage =
  | "upload"
  | "inspection"
  | "transcription"
  | "analysis"
  | "viral"
  | "clips"
  | "thumbnails"
  | "publishing"
  | "completed";

export interface ProcessingProgress {
  stage: ProcessingStage;
  progress: number;
  message: string;
}