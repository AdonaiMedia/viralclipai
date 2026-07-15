export interface ViralProbability {
  score: number;
  level: "Low" | "Medium" | "High" | "Very High";
}

export async function estimateViralProbability(
  overallScore: number,
  emotion: string,
  hasCTA: boolean
): Promise<ViralProbability> {
  let score = overallScore;

  if (
    emotion === "motivation" ||
    emotion === "funny" ||
    emotion === "spiritual"
  ) {
    score += 10;
  }

  if (hasCTA) {
    score += 5;
  }

  score = Math.min(score, 100);

  const level: ViralProbability["level"] =
    score >= 90
      ? "Very High"
      : score >= 75
      ? "High"
      : score >= 50
      ? "Medium"
      : "Low";

  return {
    score,
    level,
  };
}