import { ClipPipeline } from "./pipelines/ClipPipeline";
import { CaptionPipeline } from "./pipelines/CaptionPipeline";
import { ThumbnailPipeline } from "./pipelines/ThumbnailPipeline";
import { DatabasePipeline } from "./pipelines/DatabasePipeline";
import { AIEngine } from "@/services/ai/AIEngine";

import { VideoPipeline } from "./pipelines/VideoPipeline";
import { AudioPipeline } from "./pipelines/AudioPipeline";
import { TranscriptPipeline } from "./pipelines/TranscriptPipeline";
import { ScenePipeline } from "./pipelines/ScenePipeline";
import { EmotionPipeline } from "./pipelines/EmotionPipeline";
import { ViralScorePipeline } from "./pipelines/ViralScorePipeline";

export interface VideoJob {
  videoId: number;
  userId?: string;
}

export interface VideoResult {
  success: boolean;
  message: string;
  data?: unknown;
}

export class VideoOrchestrator {

  static async process(
    job: VideoJob
  ): Promise<VideoResult> {

    console.log("================================");
    console.log("VIDEO ORCHESTRATOR");
    console.log("================================");

    console.log(job);

    // Step 1
    await VideoPipeline.run(
      job.videoId
    );

    // Step 2
    const audio =
      await AudioPipeline.run(
        job.videoId
      );

    // Step 3
    const transcript =
      await TranscriptPipeline.run(
        audio.audioPath
      );

    // Step 4
    const scenes =
      await ScenePipeline.run(
        job.videoId
      );

    // Step 5
    const emotions =
      await EmotionPipeline.run();

    // Step 6
    const viral =
      await ViralScorePipeline.run();

    // Step 7
    const ai =
      await AIEngine.analyze({
        videoId: job.videoId,
        userId: job.userId,
      });
const clips =
  await ClipPipeline.run();

const caption =
  await CaptionPipeline.run();

const thumbnail =
  await ThumbnailPipeline.run();

    if (!ai.success) {
await DatabasePipeline.save(
  job.videoId,
  {
    transcript,
    scenes,
    emotions,
    viral,
    clips,
    caption,
    thumbnail,
  }
);
      return {
        success: false,
        message: ai.message,
      };

    }

    console.log("VIDEO PROCESS COMPLETED");

   return {

  success: true,

  message: "Video processed successfully.",

  data: {
    transcript,
    scenes,
    emotions,
    viral,
    clips,
    caption,
    thumbnail,
  },

    };

  }

}