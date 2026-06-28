import { ViralScore } from "./ViralScoringEngine";

export function ClipRankingEngine(

  clips: ViralScore[],

  limit: number = 5

): ViralScore[] {

  return clips

    .sort((a, b) => b.viralScore - a.viralScore)

    .slice(0, limit);

}