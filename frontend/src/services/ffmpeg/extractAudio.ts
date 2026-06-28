import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
import fs from "fs";

const execAsync = promisify(exec);

export async function extractAudio(
  inputVideo: string,
  outputAudio: string
) {
  try {
    // Hakikisha folder la output lipo
    const outputDir = path.dirname(outputAudio);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const command = `ffmpeg -y -i "${inputVideo}" -vn -acodec libmp3lame -ar 44100 -ac 2 -b:a 192k "${outputAudio}"`;

    console.log("Running FFmpeg...");
    console.log(command);

    await execAsync(command);

    console.log("Audio extracted successfully.");

    return outputAudio;

  } catch (error) {
    console.error("FFmpeg Error:", error);
    throw error;
  }
}