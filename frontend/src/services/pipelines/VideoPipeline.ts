import { downloadVideo } from "../storage/downloadVideo";
import { inspectVideo } from "../inspection/VideoInspection";

export async function runVideoPipeline(
  fileName: string
) {

  console.log("================================");
  console.log("VIDEO PIPELINE");
  console.log("================================");

  const localVideo =
    await downloadVideo(fileName);

  const inspection =
    await inspectVideo(localVideo);

  if (!inspection.canProcess) {
    throw new Error(
      "Video rejected by AI Inspection."
    );
  }

  return {

    localVideo,

    inspection,

  };

}