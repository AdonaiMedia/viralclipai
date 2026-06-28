export interface ClipScore {

  start: number;

  end: number;

  title: string;

  reason: string;

  viralScore: number;

}

export function scoreTranscript(
  analysis: any
): ClipScore[] {

  try {

    if (!analysis) return [];

    if (typeof analysis === "string") {

      return JSON.parse(analysis);

    }

    return analysis;

  } catch {

    return [];

  }

}