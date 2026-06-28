import fs from "fs";

export interface AudioInspectionResult {
  audioQuality: number;
  recommendations: string[];
}

export async function inspectAudio(
  audioPath: string
): Promise<AudioInspectionResult> {

  console.log("================================");
  console.log("AI AUDIO INSPECTION");
  console.log("================================");

  console.log("Inspecting audio:", audioPath);

  const recommendations: string[] = [];

  const stats = fs.statSync(audioPath);

  const fileSizeMB = stats.size / 1024 / 1024;

  console.log("Audio Size MB:", fileSizeMB);

  let audioQuality = 80;

  if (fileSizeMB < 1) {
    audioQuality -= 20;

    recommendations.push(
      "Audio quality may be too low."
    );
  }

  return {
    audioQuality,
    recommendations,
  };
}