import { generateClip } from "./GenerateClip";

import { ViralScore } from "../ai/ViralScoringEngine";

export async function generateMultipleClips(

  videoId: number,

  inputVideo: string,

  clips: ViralScore[]

) {

  const generated = [];

  for (let i = 0; i < clips.length; i++) {

    const clip = clips[i];

    const outputName = `clip_${videoId}_${i + 1}.mp4`;

    const generatedClip = await generateClip(

      videoId,

      inputVideo,

      clip.start,

      clip.end,

      clip.viralScore,

      outputName

    );

    generated.push(generatedClip);

  }

  return generated;

}