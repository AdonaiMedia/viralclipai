export interface MockCaptionResult {
  success: boolean;
  caption: string;
}

const CAPTIONS = [
  "God's timing is always perfect. Trust Him and keep believing. 🙏 #Faith #Jesus",
  "Never underestimate the power of prayer. Your breakthrough may be closer than you think.",
  "One Bible verse can change your entire day. Stay encouraged and keep the faith.",
  "Faith grows when you choose to trust God even in difficult seasons.",
  "Share this message with someone who needs hope today. ❤️",
  "God is still working behind the scenes, even when you cannot see it.",
  "Every day is another opportunity to grow closer to God.",
  "Jesus changes lives. This message is for you today.",
];

export async function generateMockCaption(): Promise<MockCaptionResult> {
  const caption =
    CAPTIONS[Math.floor(Math.random() * CAPTIONS.length)];

  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    success: true,
    caption,
  };
}