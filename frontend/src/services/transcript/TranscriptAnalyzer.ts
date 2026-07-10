export interface TranscriptSegment {

  start: number;

  end: number;

  text: string;

}

export class TranscriptAnalyzer {

  extractSegments(
    transcript: string
  ): TranscriptSegment[] {

    if (!transcript) {
      return [];
    }

    const sentences = transcript
      .split(".")
      .map((s) => s.trim())
      .filter(Boolean);

    let current = 0;

    return sentences.map((sentence) => {

      const segment = {
        start: current,
        end: current + 10,
        text: sentence,
      };

      current += 10;

      return segment;

    });

  }

}