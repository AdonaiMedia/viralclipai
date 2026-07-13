import {
  ExportJob,
  ExportResult,
} from "./types";

import { exportMP4 } from "./ExportMP4";
import { exportShorts } from "./ExportShorts";
import { exportReels } from "./ExportReels";
import { exportTikTok } from "./ExportTikTok";

import { applyWatermark } from "./Watermark";
import { exportThumbnail } from "./ThumbnailExporter";
import { exportZip } from "./ZipExporter";

export async function runExportEngine(
  job: ExportJob
): Promise<ExportResult> {

  console.log("================================");
  console.log("EXPORT ENGINE");
  console.log("================================");

  let workingFile = job.inputFile;

  if (job.watermark) {

    workingFile =
      await applyWatermark(
        workingFile,
        {
          enabled: true,
          text: "ViralClip AI",
        }
      );

  }

  await exportThumbnail({
    videoFile: workingFile,
    outputFile: `${job.outputFile}.jpg`,
  });

  let result: ExportResult;

  switch (job.platform) {

    case "youtube":

      result =
        await exportShorts({
          ...job,
          inputFile: workingFile,
        });

      break;

    case "instagram":

      result =
        await exportReels({
          ...job,
          inputFile: workingFile,
        });

      break;

    case "tiktok":

      result =
        await exportTikTok({
          ...job,
          inputFile: workingFile,
        });

      break;

    case "facebook":

    default:

      result =
        await exportMP4({
          ...job,
          inputFile: workingFile,
        });

      break;

  }

  await exportZip(
    [
      result.outputFile,
      `${job.outputFile}.jpg`,
    ],
    `${job.outputFile}.zip`
  );

  return result;

}