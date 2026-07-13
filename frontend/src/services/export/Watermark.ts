export interface WatermarkOptions {

  enabled: boolean;

  text?: string;

}

export async function applyWatermark(

  inputFile: string,

  options: WatermarkOptions

): Promise<string> {

  console.log("================================");
  console.log("APPLY WATERMARK");
  console.log("================================");

  console.log(inputFile);

  console.log(options);

  /*
    Phase 2

    FFmpeg:
    drawtext
    overlay
    logo
  */

  return inputFile;

}