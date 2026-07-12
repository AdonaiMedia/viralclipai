const MAX_SENTENCES = 5;

export async function summarizeTranscript(
  transcript: string
): Promise<string> {

  if (!transcript.trim()) {
    return "";
  }

  const sentences = transcript
    .replace(/\n/g, " ")
    .split(/[.!?]+/)
    .map(sentence => sentence.trim())
    .filter(Boolean);

  if (sentences.length <= MAX_SENTENCES) {
    return sentences.join(". ");
  }

  const scored = sentences.map(sentence => {

    let score = 0;

    const words = sentence.split(/\s+/);

    score += Math.min(words.length, 30);

    if (sentence.includes("?")) score += 5;
    if (sentence.includes("!")) score += 3;

    const lower = sentence.toLowerCase();

    const importantWords = [
      "god",
      "jesus",
      "faith",
      "church",
      "bible",
      "mungu",
      "yesu",
      "imani",
      "kanisa",
      "biblia",
      "important",
      "secret",
      "viral",
      "business",
      "success",
      "money",
      "warning",
      "today",
      "leo",
    ];

    for (const word of importantWords) {
      if (lower.includes(word)) {
        score += 4;
      }
    }

    return {
      sentence,
      score,
    };

  });

  const summary = scored
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_SENTENCES)
    .map(item => item.sentence)
    .join(". ");

  return summary;
}