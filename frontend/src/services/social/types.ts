export type PublishPlatform =
  | "youtube"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "linkedin";

export interface PublishJob {
  videoId: number;

  clipPath: string;

  thumbnail?: string;

  title: string;

  description: string;

  hashtags: string[];

  platform: PublishPlatform;

  scheduledTime?: Date;
}

export interface PublishResult {
  success: boolean;

  platform: PublishPlatform;

  postId?: string;

  url?: string;

  message: string;
}