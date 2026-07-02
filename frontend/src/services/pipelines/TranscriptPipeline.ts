import { transcribeAudio } from "../transcription/transcribe";
import { analyzeTranscript } from "../intelligence/TranscriptIntelligence";
import { detectViralMoments } from "../intelligence/ViralMomentDetector";

export async function runTranscriptPipeline(
  extractedAudio: string
) {

  console.log("================================");
  console.log("TRANSCRIPT PIPELINE");
  console.log("================================");

  const transcript =
    await transcribeAudio(extractedAudio);

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