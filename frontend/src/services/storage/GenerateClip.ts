import { cutVideoClip } from "../ffmpeg/CutVideoClip";
import { uploadClip } from "./uploadClip";

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

  // Upload immediately
  const clipUrl = await uploadClip(outputName);

  return {

    videoId,

    startTime,

    endTime,

    viralScore,

    clipPath,

    clipUrl,

  };

}