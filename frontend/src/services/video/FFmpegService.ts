import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export interface ClipOptions {
  input: string;
  output: string;
  start: number;
  duration: number;
}

export class FFmpegService {

  async cutClip(options: ClipOptions) {

    const command = `
ffmpeg -y \
-i "${options.input}" \
-ss ${options.start} \
-t ${options.duration} \
-c:v libx264 \
-c:a aac \
"${options.output}"
`;

    console.log("================================");
    console.log("FFMPEG");
    console.log(command);
    console.log("================================");

    await execAsync(command);

    return options.output;

  }

}