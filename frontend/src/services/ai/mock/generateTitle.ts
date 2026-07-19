export interface MockTitleResult {
  success: boolean;
  title: string;
}

const TITLES = [
  "🔥 This Bible Verse Will Change Your Life Forever",
  "You Won't Believe What Jesus Did Next",
  "The Secret Every Christian Should Know",
  "Stop Scrolling! God Has a Message for You",
  "The Truth About Faith That Nobody Talks About",
  "This Prayer Can Change Your Entire Day",
  "Why Thousands Are Watching This Sermon",
  "The Most Powerful Bible Lesson Today",
];

export async function generateMockTitle(): Promise<MockTitleResult> {
  const random =
    TITLES[Math.floor(Math.random() * TITLES.length)];

  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    success: true,
    title: random,
  };
}