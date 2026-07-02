import { extractAudio } from "../ffmpeg/extractAudio";
import { inspectAudio } from "../inspection/AudioInspection";

export async function runAudioPipeline(
  localVideo: string
) {

  console.log("================================");
  console.log("AUDIO PIPELINE");
  console.log("================================");

  const audioPath = "storage/audio/audio.mp3";

  const extractedAudio = await extractAudio(
    localVideo,
    audioPath
  );

  const audioInspection = await inspectAudio(
    extractedAudio
  );

  return {
    extractedAudio,
    audioInspection,
  };
}