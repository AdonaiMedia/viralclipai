const STOP_WORDS = [
  "the",
  "and",
  "for",
  "with",
  "that",
  "this",
  "from",
  "have",
  "has",
  "your",
  "about",
  "into",
  "their",
  "they",
  "them",
  "you",
  "are",
  "was",
  "were",
  "will",
  "would",
  "could",
  "should",
  "what",
  "when",
  "where",
  "why",
  "how",
  "can",
  "kwa",
  "katika",
  "hiyo",
  "hili",
  "pia",
  "sana",
  "mimi",
  "yeye",
  "wao",
  "wetu",
  "wako",
  "yako",
  "yake",
];

export async function analyzeKeywords(
  transcript: string,
  limit = 15
): Promise<string[]> {

  if (!transcript.trim()) {
    return [];
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

  return Object.entries(counter)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(item => item[0]);
}