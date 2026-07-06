import { saveAnalysis } from "../database/saveAnalysis";
import { saveClip } from "../database/saveClip";

interface GeneratedClip {
  startTime: number;
  endTime: number;
  clipUrl: string;
  viralScore: number;
}

export async function runDatabasePipeline(
  videoId: number,
  intelligence: string,
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
    intelligence,
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