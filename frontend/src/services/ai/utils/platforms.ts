export type SupportedPlatform =
  | "youtube"
  | "instagram"
  | "facebook"
  | "tiktok";

export interface PlatformLimits {
  title: number;
  caption: number;
}

export const PLATFORM_LIMITS: Record<
  SupportedPlatform | "default",
  PlatformLimits
> = {
  youtube: {
    title: 100,
    caption: 200,
  },

  instagram: {
    title: 80,
    caption: 2200,
  },

  facebook: {
    title: 80,
    caption: 500,
  },

  tiktok: {
    title: 80,
    caption: 2200,
  },

  default: {
    title: 60,
    caption: 180,
  },
};