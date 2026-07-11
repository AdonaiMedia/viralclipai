import {
  AIContentRequest,
  AIContentResult,
} from "./types";

const HOOK_WORDS = [
  "subiri",
  "usipite",
  "sikiliza",
  "angalia",
  "leo",
  "kwa nini",
  "huwezi kuamini",
];

const FALLBACK_HOOK =
  "Usipite! Kuna jambo muhimu unapaswa kulisikia.";

export async function generateHook(
  request: AIContentRequest
): Promise<AIContentResult> {

  const transcript = (
    request.transcript ?? ""
  ).trim();

  if (!transcript) {
    return {
      success: true,
      content: FALLBACK_HOOK,
    };
  }

  const sentences = transcript
    .split(/[.!?]+/)
    .map(sentence => sentence.trim())
    .filter(Boolean);

  let bestSentence = "";
  let bestScore = -1;

  for (const sentence of sentences) {

    let score = 0;

    const text = sentence.toLowerCase();

    if (sentence.length >= 20 && sentence.length <= 120) {
      score += 5;
    }

    if (sentence.includes("?")) {
      score += 10;
    }

    if (sentence.includes("!")) {
      score += 8;
    }

    for (const word of HOOK_WORDS) {
      if (text.includes(word)) {
        score += 10;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestSentence = sentence;
    }
  }

  return {
    success: true,
    content: bestSentence || FALLBACK_HOOK,
  };
}