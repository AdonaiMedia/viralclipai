export interface MockViralAnalysisResult {
  success: boolean;
  analysis: {
    score: number;
    engagement: string;
    strengths: string[];
    improvements: string[];
  };
}

export async function generateMockViralAnalysis(): Promise<MockViralAnalysisResult> {
  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    success: true,
    analysis: {
      score: 92,
      engagement: "High Viral Potential",
      strengths: [
        "Strong opening hook",
        "Emotional message",
        "Good pacing",
        "Short and engaging",
      ],
      improvements: [
        "Add subtitles",
        "Use energetic background music",
        "Include a stronger call-to-action",
      ],
    },
  };
}