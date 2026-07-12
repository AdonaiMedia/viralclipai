export async function recommendPlatforms(
  transcript: string
): Promise<string[]> {

  const text = transcript.toLowerCase();

  const platforms = new Set<string>();

  if (
    text.includes("tutorial") ||
    text.includes("lesson") ||
    text.includes("education") ||
    text.includes("learn") ||
    text.includes("teach") ||
    text.includes("sermon") ||
    text.includes("preaching") ||
    text.includes("biblia") ||
    text.includes("kanisa")
  ) {
    platforms.add("youtube");
  }

  if (
    text.includes("funny") ||
    text.includes("dance") ||
    text.includes("music") ||
    text.includes("challenge") ||
    text.includes("trend") ||
    text.includes("viral")
  ) {
    platforms.add("tiktok");
  }

  if (
    text.includes("motivation") ||
    text.includes("business") ||
    text.includes("lifestyle") ||
    text.includes("fitness") ||
    text.includes("quotes")
  ) {
    platforms.add("instagram");
  }

  if (
    text.includes("family") ||
    text.includes("community") ||
    text.includes("church") ||
    text.includes("event") ||
    text.includes("live")
  ) {
    platforms.add("facebook");
  }

  if (platforms.size === 0) {
    return [
      "youtube",
      "facebook",
      "instagram",
      "tiktok",
    ];
  }

  return [...platforms];
}