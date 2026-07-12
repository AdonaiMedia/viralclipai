import { transcribeAudio } from "../transcription/transcribe";
import { saveTranscript } from "../transcription/saveTranscript";

import { runAIIntelligence } from "../ai/intelligence/AIIntelligence";
import { runAIOrchestrator } from "../ai/AIOrchestrator";

import { detectViralMoments } from "../intelligence/ViralMomentDetector";

export async function runTranscriptPipeline(
  videoId: number,
  extractedAudio: string
) {

  console.log("================================");
  console.log("TRANSCRIPT PIPELINE");
  console.log("================================");

  /*
  ====================================
  TRANSCRIBE
  ====================================
  */

  const transcript =
    await transcribeAudio(extractedAudio);

  await saveTranscript(
    videoId,
    transcript
  );

  /*
  ====================================
  AI INTELLIGENCE
  ====================================
  */

  const intelligence =
    await runAIIntelligence(
      transcript
    );

  /*
  ====================================
  AI CONTENT
  ====================================
  */

  const ai =
    await runAIOrchestrator({

      transcript,

      topic: intelligence.topic,

      platform: "youtube",

      language: "en",

    });

  /*
  ====================================
  VIRAL MOMENTS
  ====================================
  */

  const viralMoments =
    await detectViralMoments(
      transcript
    );

  return {

    transcript,

    intelligence: {

      ...intelligence,

      ai,

    },

    viralMoments,

  };

}