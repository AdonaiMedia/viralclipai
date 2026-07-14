export interface Scene {
  start: number;
  end: number;
  confidence: number;
}

export class ScenePipeline {

  static async run(
    videoId: number
  ) {

    console.log("================================");
    console.log("SCENE PIPELINE");
    console.log("================================");

    console.log(
      "Detecting scenes:",
      videoId
    );

    const scenes: Scene[] = [
      {
        start: 0,
        end: 15,
        confidence: 0.95,
      },
      {
        start: 16,
        end: 40,
        confidence: 0.91,
      },
    ];

    return {
      success: true,
      scenes,
    };

  }

}