import { ThumbnailCandidate } from "./ThumbnailIntelligence";

export interface ThumbnailPrompt {

  title: string;

  prompt: string;

}

export async function generateThumbnailPrompt(

  thumbnail: ThumbnailCandidate,

  transcript: string

): Promise<ThumbnailPrompt> {

  console.log("================================");
  console.log("AI THUMBNAIL PROMPT");
  console.log("================================");

  // FAKE AI (kwa sasa)

  const title =
    "God Is About To Change Your Life";

  const prompt = `

Create an ultra realistic YouTube thumbnail.

Style:
Cinematic Lighting
High Contrast
Sharp Face
Professional Color Grading

Subject:
Christian preacher speaking with passion.

Emotion:
Powerful
Hope
Faith
Victory

Large Bold Text:
"${title}"

Background:
Golden light,
soft glow,
dramatic atmosphere.

Highly clickable.

`;

  return {

    title,

    prompt,

  };

}