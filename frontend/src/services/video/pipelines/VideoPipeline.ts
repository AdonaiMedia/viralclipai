export class VideoPipeline {

  static async run(
    videoId: number
  ) {

    console.log("================================");
    console.log("VIDEO PIPELINE");
    console.log("================================");

    console.log(
      "Processing Video:",
      videoId
    );

    return {
      success: true,
    };

  }

}