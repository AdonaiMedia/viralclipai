export interface MockHashtagsResult {
  success: boolean;
  hashtags: string[];
}

const HASHTAGS = [
  "#Jesus",
  "#Bible",
  "#Faith",
  "#Christian",
  "#Prayer",
  "#God",
  "#HolySpirit",
  "#BibleVerse",
  "#Hope",
  "#Grace",
  "#Worship",
  "#ChristianLife",
];

export async function generateMockHashtags(): Promise<MockHashtagsResult> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    hashtags: HASHTAGS,
  };
}