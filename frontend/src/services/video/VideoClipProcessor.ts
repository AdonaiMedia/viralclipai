import { ClipDetector } from "@/services/clips/ClipDetector";
import { FFmpegService } from "@/services/video/FFmpegService";

export class VideoClipProcessor {

  private detector = new ClipDetector();

  private ffmpeg = new FFmpegService();

  async process(
    inputVideo: string,
    transcript: string,
    outputFolder: string
  ) {

    const clips = await this.detector.detect({
      transcript,
      duration: 0,
    });

    const outputs: string[] = [];

    let index = 1;

    for (const clip of clips) {

      const output =
        `${outputFolder}/clip_${index}.mp4`;

      await this.ffmpeg.cutClip({
        input: inputVideo,
        output,
        start: clip.start,
        duration: clip.end - clip.start,
      });

      outputs.push(output);

      index++;

    }

    return outputs;

  }

}