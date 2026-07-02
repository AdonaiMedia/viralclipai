import { saveAnalysis } from "../database/saveAnalysis";
import { saveClip } from "../database/saveClip";

export async function runDatabasePipeline(

  videoId: number,

  intelligence: string,

  viralMoments: any,

  overallScore: number,

  clipUrl: string

) {

  console.log("================================");
  console.log("DATABASE PIPELINE");
  console.log("================================");

  await saveAnalysis(

    videoId,

    intelligence,

    JSON.stringify(viralMoments),

    overallScore

  );

  const savedClip = await saveClip(

    videoId,

    0,

    10,

    clipUrl,

    overallScore

  );

  return {

    savedClip,

  };

}