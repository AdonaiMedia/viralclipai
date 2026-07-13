import {
  PublishJob,
  PublishResult,
} from "./types";

export async function publishFacebook(
  job: PublishJob
): Promise<PublishResult> {

  console.log("================================");
  console.log("PUBLISH FACEBOOK");
  console.log("================================");

  console.log(job);

  return {
    success: true,

    platform: "facebook",

    postId: "facebook-demo-id",

    url: "https://facebook.com",

    message: "Video published to Facebook.",
  };

}