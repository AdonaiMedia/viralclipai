import { spawn } from "child_process";
import path from "path";
import fs from "fs";

export async function extractThumbnailFrame(
  videoPath: string,
  outputName: string
): Promise<string> {

  return new Promise((resolve, reject) => {

    console.log("================================");
    console.log("EXTRACTING THUMBNAIL");
    console.log("================================");

    const outputDir = path.join(
      process.cwd(),
      "storage",
      "frames"
    );

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(
      outputDir,
      outputName
    );

    const ffmpeg = spawn("ffmpeg", [
      "-y",
      "-i",
      videoPath,
      "-ss",
      "00:00:03",
      "-frames:v",
      "1",
      outputPath,
    ]);

    ffmpeg.stdout.on("data", (data) => {
      console.log(data.toString());
    });

    ffmpeg.stderr.on("data", (data) => {
      console.log(data.toString());
    });

    ffmpeg.on("error", (error) => {
      console.error("Thumbnail FFmpeg Error:", error);
      reject(error);
    });

    ffmpeg.on("close", (code) => {

      if (code === 0) {

        console.log("================================");
        console.log("THUMBNAIL SAVED");
        console.log("================================");

        console.log(outputPath);

        resolve(outputPath);

      } else {

        reject(
          new Error(
            `Thumbnail FFmpeg exited with code ${code}`
          )
        );

      }

    });

  });

}