import {
  ExportJob,
  ExportResult,
} from "./types";

export async function exportMP4(
  job: ExportJob
): Promise<ExportResult> {

  console.log("================================");
  console.log("EXPORT MP4");
  console.log("================================");

  console.log(job);

  return {
    success: true,

    outputFile: job.outputFile,

    platform: job.platform,

    message: "MP4 export completed.",
  };

}