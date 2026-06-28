import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export interface VideoInspectionResult {
  canProcess: boolean;
  qualityScore: number;
  viralPotential: number;
  recommendations: string[];
}

export async function inspectVideo(
  videoPath: string
): Promise<VideoInspectionResult> {

  console.log("================================");
  console.log("AI VIDEO INSPECTION");
  console.log("================================");

  console.log("Inspecting:", videoPath);

  const { stdout } = await execAsync(
    `ffprobe -v quiet -print_format json -show_format -show_streams "${videoPath}"`
  );

  const metadata = JSON.parse(stdout);

  const videoStream = metadata.streams.find(
    (stream: any) => stream.codec_type === "video"
  );

  const width = videoStream?.width ?? 0;
  const height = videoStream?.height ?? 0;

  const duration = Number(
    metadata.format?.duration ?? 0
  );

  console.log("Resolution:", width, "x", height);
  console.log("Duration:", duration);

  let qualityScore = 80;

  const recommendations: string[] = [];

  if (width < 400 || height < 700) {
    qualityScore -= 20;

    recommendations.push(
      "Video resolution is lower than recommended."
    );
  }

  if (duration < 10) {
    recommendations.push(
      "Video is already very short."
    );
  }

  const viralPotential = 70;

  return {
    canProcess: true,
    qualityScore,
    viralPotential,
    recommendations,
  };
}