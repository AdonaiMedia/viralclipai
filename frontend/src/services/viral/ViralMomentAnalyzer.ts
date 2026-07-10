import { ClipCandidate } from "@/services/clips/ClipDetector";

export class ViralMomentAnalyzer {

  rank(
    clips: ClipCandidate[]
  ): ClipCandidate[] {

    return clips.sort(
      (a, b) => b.score - a.score
    );

  }

}