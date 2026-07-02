import {
  ViralAnalysis,
  ViralScoringEngine,
} from "../ai/ViralScoringEngine";

import { ClipRankingEngine } from "../ai/ClipRankingEngine";

export async function detectViralMoments(
  transcript: string
) {
  console.log("================================");
  console.log("AI VIRAL MOMENT DETECTOR");
  console.log("================================");

  const sentences = transcript
    .split(".")
    .map((s) => s.trim())
    .filter(Boolean);

  const clips: ViralAnalysis[] = sentences.map(
  (sentence, index) => ({

    start: Math.min(index * 2, 4),

    end: Math.min(index * 2 + 2, 6),

    title: sentence,

    reason: sentence,

  })
);

  const scored = ViralScoringEngine(clips);

  const ranked = ClipRankingEngine(scored, 5);

  console.log("Top Viral Clips:");

  ranked.forEach((clip) => {
    console.log(
      clip.start,
      clip.end,
      clip.viralScore,
      clip.title
    );
  });

  return ranked;
}