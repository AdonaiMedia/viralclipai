export class AudioPipeline {

  static async run(
    videoId: number
  ) {

    console.log("================================");
    console.log("AUDIO PIPELINE");
    console.log("================================");

    console.log(
      "Extracting audio from video:",
      videoId
    );

    return {
      success: true,
      audioPath: `audio/${videoId}.mp3`,
    };

  }

}