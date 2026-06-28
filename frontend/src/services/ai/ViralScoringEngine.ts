export interface ViralAnalysis {

  start: number;

  end: number;

  title: string;

  reason: string;

  score?: number;

}

export interface ViralScore {

  start: number;

  end: number;

  title: string;

  reason: string;

  hookScore: number;

  emotionScore: number;

  storyScore: number;

  engagementScore: number;

  viralScore: number;

}

export function ViralScoringEngine(

  clips: ViralAnalysis[]

): ViralScore[] {

  return clips.map((clip) => {

    // ===== Hook =====

    const hookScore = 25;

    // ===== Emotion =====

    const emotionScore = 25;

    // ===== Story =====

    const storyScore = 20;

    // ===== Engagement =====

    const engagementScore = 25;

    // ===== Final Score =====

    const viralScore =

      hookScore +

      emotionScore +

      storyScore +

      engagementScore;

    return {

      ...clip,

      hookScore,

      emotionScore,

      storyScore,

      engagementScore,

      viralScore,

    };

  });

}