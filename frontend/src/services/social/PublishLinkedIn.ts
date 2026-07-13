import {
  PublishJob,
  PublishResult,
} from "./types";

export async function publishLinkedIn(
  job: PublishJob
): Promise<PublishResult> {

  console.log("================================");
  console.log("PUBLISH LINKEDIN");
  console.log("================================");

  console.log(job);

  return {
    success: true,

    platform: "linkedin",

    postId: "linkedin-demo-id",

    url: "https://linkedin.com",

    message: "Video published to LinkedIn.",
  };

}