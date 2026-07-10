import { ClipCandidate } from "./ClipDetector";

export class ClipSelectionEngine {

  selectBest(
    clips: ClipCandidate[],
    limit = 5
  ) {

    return clips.slice(0, limit);

  }

}