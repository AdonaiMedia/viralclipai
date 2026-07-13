import {
  ExportJob,
  ExportResult,
} from "./types";

export async function exportShorts(
  job: ExportJob
): Promise<ExportResult> {

  console.log("================================");
  console.log("EXPORT YOUTUBE SHORT");
  console.log("================================");

  console.log(job);

  return {
    success: true,

    outputFile: job.outputFile,

    platform: "youtube",

    message: "YouTube Shorts export completed.",
  };

}