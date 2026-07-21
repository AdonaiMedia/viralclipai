export interface MockTranscriptResult {
  success: boolean;
  transcript: string;
}

const TRANSCRIPTS = [
  `Welcome everyone.
Today we are learning that faith in God can change every situation.
No matter what you are facing, remember that God is always with you.
Keep praying, keep believing, and never lose hope.
Thank you for watching.`,

  `Jesus Christ is the same yesterday, today, and forever.
His promises never fail.
Trust Him with all your heart and continue walking by faith.`,

  `Sometimes God works in silence.
Even when you cannot see the answer, He is preparing something greater.
Be patient and keep trusting Him.`,

  `The Word of God is living and powerful.
Read it every day, pray without ceasing, and let your faith continue to grow.`
];

export async function generateMockTranscript(): Promise<MockTranscriptResult> {
  const transcript =
    TRANSCRIPTS[Math.floor(Math.random() * TRANSCRIPTS.length)];

  await new Promise((resolve) =>
    setTimeout(resolve, 1500)
  );

  return {
    success: true,
    transcript,
  };
}