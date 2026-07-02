import { extractThumbnailFrame } from "../thumbnails/ThumbnailFrameExtractor";
import { analyzeThumbnail } from "../thumbnails/ThumbnailIntelligence";
import { generateThumbnailPrompt } from "../thumbnails/ThumbnailPromptEngine";
import { generateThumbnailVariations } from "../thumbnails/GenerateThumbnailVariations";

export async function runThumbnailPipeline(

  videoPath: string,

  transcript: string,

  videoId: number

) {

  console.log("================================");
  console.log("THUMBNAIL PIPELINE");
  console.log("================================");

  const thumbnailPath =
    await extractThumbnailFrame(
      videoPath,
      `thumbnail_${videoId}.jpg`
    );

  const thumbnailAnalysis =
    await analyzeThumbnail(
      thumbnailPath
    );

  const thumbnailPrompt =
    await generateThumbnailPrompt(
      thumbnailAnalysis,
      transcript
    );

  const thumbnailVariations =
    await generateThumbnailVariations(
      thumbnailPrompt.prompt
    );

  return {

    thumbnailPath,

    thumbnailAnalysis,

    thumbnailPrompt,

    thumbnailVariations,

  };

}