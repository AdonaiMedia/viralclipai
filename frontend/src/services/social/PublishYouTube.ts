import {
  PublishJob,
  PublishResult,
} from "./types";

export async function publishYouTube(
  job: PublishJob
): Promise<PublishResult> {

  console.log("================================");
  console.log("PUBLISH YOUTUBE");
  console.log("================================");

  console.log(job);

  /*
    Phase 2

    YouTube Data API v3
  */

  return {
    success: true,

    platform: "youtube",

    postId: "youtube-demo-id",

    url: "https://youtube.com",

    message: "Video published to YouTube.",
  };

}