import {
  ExportJob,
  ExportResult,
} from "./types";

export async function exportTikTok(
  job: ExportJob
): Promise<ExportResult> {

  console.log("================================");
  console.log("EXPORT TIKTOK");
  console.log("================================");

  console.log(job);

  return {
    success: true,

    outputFile: job.outputFile,

    platform: "tiktok",

    message: "TikTok export completed.",
  };

}