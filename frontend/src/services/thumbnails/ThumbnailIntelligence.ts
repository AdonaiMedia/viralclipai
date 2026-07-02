export interface ThumbnailCandidate {

  imagePath: string;

  faceScore: number;

  emotionScore: number;

  brightnessScore: number;

  textVisibility: number;

  thumbnailScore: number;

}

export async function analyzeThumbnail(

  imagePath: string

): Promise<ThumbnailCandidate> {

  console.log("================================");
  console.log("AI THUMBNAIL ANALYSIS");
  console.log("================================");

  console.log("Analyzing:", imagePath);

  // FAKE AI (kwa sasa)

  const faceScore = 90;
  const emotionScore = 88;
  const brightnessScore = 94;
  const textVisibility = 82;

  const thumbnailScore = Math.round(

    (
      faceScore +
      emotionScore +
      brightnessScore +
      textVisibility

    ) / 4

  );

  return {

    imagePath,

    faceScore,

    emotionScore,

    brightnessScore,

    textVisibility,

    thumbnailScore,

  };

}