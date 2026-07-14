export interface ViralSegment {
  start: number;
  end: number;
  score: number;
}

export class ViralScorePipeline {

  static async run() {

    console.log("================================");
    console.log("VIRAL SCORE PIPELINE");
    console.log("================================");

    return {
      success: true,
      segments: [
        {
          start: 5,
          end: 18,
          score: 95,
        },
        {
          start: 30,
          end: 45,
          score: 88,
        },
      ],
    };

  }

}