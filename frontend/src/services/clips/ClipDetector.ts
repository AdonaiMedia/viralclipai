import { TranscriptAnalyzer } from "@/services/transcript/TranscriptAnalyzer";

export interface ClipCandidate {
  start: number;
  end: number;
  score: number;
  reason: string;
}

export interface DetectionInput {
  transcript: string;
  duration: number;
}

export class ClipDetector {

  async detect(
    input: DetectionInput
  ): Promise<ClipCandidate[]> {

    console.log("================================");
    console.log("SMART CLIP DETECTOR");
    console.log("================================");

    const analyzer = new TranscriptAnalyzer();

    const segments = analyzer.extractSegments(
      input.transcript
    );

    return segments.map((segment) => ({
      start: segment.start,
      end: segment.end,
      score: Math.floor(80 + Math.random() * 20),
      reason: "Transcript Segment",
    }));

  }

}