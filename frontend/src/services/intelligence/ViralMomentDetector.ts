export interface ViralMoment {
  startTime: number;
  endTime: number;
  score: number;
  title: string;
}

export async function detectViralMoments(
  transcript: string
): Promise<ViralMoment[]> {

  console.log("================================");
  console.log("FAKE VIRAL MOMENT DETECTOR");
  console.log("================================");

  console.log("Transcript Length:", transcript.length);

  return [
    {
      startTime: 0,
      endTime: 10,
      score: 95,
      title: "Powerful Opening",
    },
    {
      startTime: 12,
      endTime: 22,
      score: 92,
      title: "Strong Message",
    },
    {
      startTime: 24,
      endTime: 34,
      score: 90,
      title: "Emotional Moment",
    },
  ];
}