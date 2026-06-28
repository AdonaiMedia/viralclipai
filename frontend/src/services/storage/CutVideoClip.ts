import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
import fs from "fs";

const execAsync = promisify(exec);

export async function cutVideoClip(
  inputVideo: string,
  startTime: number,
  endTime: number,
  outputName: string
) {
  const clipsDir = path.join(
    process.cwd(),
    "storage",
    "clips"
  );

  if (!fs.existsSync(clipsDir)) {
    fs.mkdirSync(clipsDir, {
      recursive: true,
    });
  }

  const outputPath = path.join(
    clipsDir,
    outputName
  );

  // IMPORTANT:
  // Command yote iwe mstari mmoja
  const command =
    `ffmpeg -y -i "${inputVideo}" ` +
    `-ss ${startTime} ` +
    `-to ${endTime} ` +
    `-c copy "${outputPath}"`;

  console.log("================================");
  console.log("CUTTING CLIP");
  console.log("================================");
  console.log(command);

  await execAsync(command);

  console.log("Clip created:", outputPath);

  return outputPath;
}