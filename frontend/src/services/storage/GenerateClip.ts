import { cutVideoClip } from "./CutVideoClip";

export async function generateClip(
  videoId: number,
  inputVideo: string,
  startTime: number,
  endTime: number,
  viralScore: number,
  outputName: string
) {
  const clipPath = await cutVideoClip(
    inputVideo,
    startTime,
    endTime,
    outputName
  );

  return {
    videoId,
    startTime,
    endTime,
    viralScore,
    clipPath,
  };
}