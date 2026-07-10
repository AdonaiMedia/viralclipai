import { VideoClipProcessor } from "@/services/video/VideoClipProcessor";

export interface VideoProcessingRequest {
  inputVideo: string;
  transcript: string;
  outputFolder: string;
}

export class VideoProcessingPipeline {

  private processor = new VideoClipProcessor();

  async run(
    request: VideoProcessingRequest
  ) {

    console.log("================================");
    console.log("VIDEO PROCESSING PIPELINE");
    console.log("================================");

    const clips =
      await this.processor.process(
        request.inputVideo,
        request.transcript,
        request.outputFolder
      );

    return {
      success: true,
      clips,
    };

  }

}