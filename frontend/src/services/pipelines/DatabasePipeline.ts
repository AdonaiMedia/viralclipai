import { saveAnalysis } from "../database/saveAnalysis";
import { saveClip } from "../database/saveClip";

import { AIIntelligenceResult } from "../ai/intelligence/AIIntelligence";
import { AIOrchestratorResult } from "../ai/AIOrchestrator";

interface GeneratedClip {
  startTime: number;
  endTime: number;
  clipUrl: string;
  viralScore: number;
}

interface FullTranscriptIntelligence
  extends AIIntelligenceResult {

  ai: AIOrchestratorResult;

}

export async function runDatabasePipeline(
  videoId: number,
  intelligence: FullTranscriptIntelligence,
  viralMoments: unknown[],
  overallScore: number,
  generatedClips: GeneratedClip[]
) {

  console.log("================================");
  console.log("DATABASE PIPELINE");
  console.log("================================");

  /*
  ====================================
  SAVE ANALYSIS
  ====================================
  */

  await saveAnalysis(
    videoId,
    JSON.stringify(intelligence),
    JSON.stringify(viralMoments),
    overallScore
  );

  /*
  ====================================
  SAVE CLIPS
  ====================================
  */

  const savedClips = [];

  for (const clip of generatedClips) {

    const saved = await saveClip(
      videoId,
      clip.startTime,
      clip.endTime,
      clip.clipUrl,
      clip.viralScore
    );

    savedClips.push(saved);

  }

  console.log(`Saved ${savedClips.length} clips`);

  return {

    success: true,

    savedClips,

    totalSaved: savedClips.length,

  };

}