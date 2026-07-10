import { transcribeAudio } from "../transcription/transcribe";
import { saveTranscript } from "../transcription/saveTranscript";
import { analyzeTranscript } from "../intelligence/TranscriptIntelligence";
import { detectViralMoments } from "../intelligence/ViralMomentDetector";

export async function runTranscriptPipeline(
  videoId: number,
  extractedAudio: string
) {

  console.log("================================");
  console.log("TRANSCRIPT PIPELINE");
  console.log("================================");

  const transcript =
    await transcribeAudio(extractedAudio);

  await saveTranscript(
    videoId,
    transcript
  );

  const intelligence =
    await analyzeTranscript(transcript);

  const viralMoments =
    await detectViralMoments(transcript);

  return {

    transcript,

    intelligence,

    viralMoments,

  };

}