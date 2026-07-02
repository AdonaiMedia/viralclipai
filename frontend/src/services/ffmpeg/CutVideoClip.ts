import { spawn } from "child_process";
import path from "path";
import fs from "fs";

export async function cutVideoClip(
  inputVideo: string,
  startTime: number,
  endTime: number,
  outputName: string
): Promise<string> {

  return new Promise((resolve, reject) => {

    const outputDir = path.join(
      process.cwd(),
      "storage",
      "clips"
    );

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(
      outputDir,
      outputName
    );

    const duration = endTime - startTime;

    console.log("================================");
    console.log("CUTTING VIDEO CLIP");
    console.log("================================");

    console.log("Input :", inputVideo);
    console.log("Output:", outputPath);

    const ffmpeg = spawn("ffmpeg", [
      "-y",

      "-ss",
      startTime.toString(),

      "-i",
      inputVideo,

      "-t",
      duration.toString(),

      "-c:v",
      "libx264",

      "-c:a",
      "aac",

      outputPath,
    ]);

    ffmpeg.stdout.on("data", (data) => {
      console.log(data.toString());
    });

    ffmpeg.stderr.on("data", (data) => {
      console.log(data.toString());
    });

    ffmpeg.on("error", (error) => {
      console.error("FFmpeg Error:", error);
      reject(error);
    });

    ffmpeg.on("close", (code) => {

      if (code === 0) {

        console.log("================================");
        console.log("CLIP GENERATED SUCCESSFULLY");
        console.log("================================");

        resolve(outputPath);

      } else {

        reject(
          new Error(
            `FFmpeg exited with code ${code}`
          )
        );

      }

    });

  });

}