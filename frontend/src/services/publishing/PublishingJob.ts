export type PublishingPlatform =
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "threads"
  | "x"
  | "linkedin"
  | "pinterest";

export interface PublishingJob {
  id: string;

  platform: PublishingPlatform;

  title: string;

  caption: string;

  hashtags: string[];

  videoUrl?: string;

  imageUrl?: string;

  scheduledAt?: Date;

  status:
    | "pending"
    | "publishing"
    | "completed"
    | "failed";
}