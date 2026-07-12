const STOP_WORDS = [
  "the",
  "is",
  "are",
  "was",
  "were",
  "this",
  "that",
  "with",
  "from",
  "have",
  "has",
  "your",
  "about",
  "into",
  "their",
  "they",
  "them",
  "and",
  "for",
  "you",
  "not",
  "but",
  "our",
  "his",
  "her",
  "she",
  "him",
  "its",
  "it's",
  "what",
  "when",
  "where",
  "how",
  "why",
  "can",
  "will",
  "would",
  "could",
  "should",
  "mungu",
  "kwa",
  "katika",
  "hiyo",
  "hili",
  "yake",
  "yako",
  "wako",
  "bila",
  "kama",
  "hata",
  "sana",
  "pia",
];

export async function analyzeTopic(
  transcript: string
): Promise<string> {

  if (!transcript.trim()) {
    return "General Content";
  }

  const words = transcript
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(word => word.length > 3)
    .filter(word => !STOP_WORDS.includes(word));

  const counter: Record<string, number> = {};

  for (const word of words) {
    counter[word] = (counter[word] ?? 0) + 1;
  }

  const sorted = Object.entries(counter)
    .sort((a, b) => b[1] - a[1]);

  if (sorted.length === 0) {
    return "General Content";
  }

  const keywords = sorted
    .slice(0, 3)
    .map(item => item[0]);

  return keywords.join(" ");
}