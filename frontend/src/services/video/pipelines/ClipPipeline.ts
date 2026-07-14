export interface GeneratedClip {
  id: number;
  start: number;
  end: number;
  viralScore: number;
}

export class ClipPipeline {

  static async run() {

    console.log("================================");
    console.log("CLIP PIPELINE");
    console.log("================================");

    const clips: GeneratedClip[] = [
      {
        id: 1,
        start: 5,
        end: 18,
        viralScore: 95,
      },
      {
        id: 2,
        start: 30,
        end: 45,
        viralScore: 88,
      },
    ];

    return {
      success: true,
      clips,
    };

  }

}