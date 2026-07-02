import { ViralScoringEngine } from "../ai/ViralScoringEngine";
import { ClipRankingEngine } from "../ai/ClipRankingEngine";

import { generateMultipleClips } from "../storage/GenerateMultipleClips";

export async function runClipPipeline(

  videoId: number,

  localVideo: string,

  viralMoments: any[]

) {

  console.log("================================");
  console.log("CLIP PIPELINE");
  console.log("================================");

  const scoredClips =
    ViralScoringEngine(viralMoments);

  const bestClips =
    ClipRankingEngine(
      scoredClips,
      5
    );

  const generatedClips =
    await generateMultipleClips(
      videoId,
      localVideo,
      bestClips
    );

  return {

    scoredClips,

    bestClips,

    generatedClips,

  };

}