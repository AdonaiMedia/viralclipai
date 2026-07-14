export interface SaveAIResult {
  transcript: unknown;
  scenes: unknown;
  emotions: unknown;
  viral: unknown;
  clips: unknown;
  caption: unknown;
  thumbnail: unknown;
}

export class DatabasePipeline {

  static async save(
    videoId: number,
    data: SaveAIResult
  ) {

    console.log("================================");
    console.log("DATABASE PIPELINE");
    console.log("================================");

    console.log(
      "Saving AI results for video:",
      videoId
    );

    console.log(data);

    return {
      success: true,
    };

  }

}