import {
  PublishJob,
  PublishResult,
} from "./types";

export async function publishInstagram(
  job: PublishJob
): Promise<PublishResult> {

  console.log("================================");
  console.log("PUBLISH INSTAGRAM");
  console.log("================================");

  console.log(job);

  return {
    success: true,

    platform: "instagram",

    postId: "instagram-demo-id",

    url: "https://instagram.com",

    message: "Video published to Instagram.",
  };

}