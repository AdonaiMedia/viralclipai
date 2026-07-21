export interface MockVoiceOverResult {
  success: boolean;
  script: string;
}

const SCRIPTS = [
  "Welcome! Today we're exploring a powerful message from God's Word. Stay with us until the end for encouragement that can strengthen your faith.",

  "Have you ever wondered how one Bible verse can completely change your day? Let's discover it together.",

  "No matter what you're facing today, remember that God is faithful. This short message is here to encourage your heart.",

  "Take a moment to listen. God's promises are still true today, and His love never fails."
];

export async function generateMockVoiceOver(): Promise<MockVoiceOverResult> {
  const script =
    SCRIPTS[Math.floor(Math.random() * SCRIPTS.length)];

  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    success: true,
    script,
  };
}