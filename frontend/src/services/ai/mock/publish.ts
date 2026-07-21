export interface MockPublishResult {
  success: boolean;
  platforms: string[];
  message: string;
}

export async function generateMockPublish(): Promise<MockPublishResult> {
  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    success: true,
    platforms: [
      "TikTok",
      "YouTube Shorts",
      "Facebook Reels",
      "Instagram Reels",
    ],
    message: "Video is ready for publishing.",
  };
}