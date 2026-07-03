import { saveAnalysis } from "../database/saveAnalysis";
import { saveClip } from "../database/saveClip";

export async function runDatabasePipeline(

  videoId: number,

  intelligence: string,

  viralMoments: any[],

  overallScore: number,

  generatedClips: any[]

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

  // Save Every Clip

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

  return {

    savedClips,

  };

}