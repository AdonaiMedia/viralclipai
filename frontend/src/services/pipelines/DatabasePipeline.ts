import { saveAnalysis } from "../database/saveAnalysis";
import { saveClip } from "../database/saveClip";
import { TranscriptIntelligence } from "../intelligence/TranscriptIntelligence";

interface GeneratedClip {
  startTime: number;
  endTime: number;
  clipUrl: string;
  viralScore: number;
}
interface FullTranscriptIntelligence extends TranscriptIntelligence {
  ai: {
    success: boolean;
    title: string;
    caption: string;
    hook: string;
    hashtags: string;
  };
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

  // Save AI Analysis
  await saveAnalysis(
  videoId,
  JSON.stringify(intelligence),
  JSON.stringify(viralMoments),
  overallScore
);

  // Save Generated Clips
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

  console.log(`✅ Saved ${savedClips.length} clips`);

  return {
    success: true,
    savedClips,
    totalSaved: savedClips.length,
  };
}