import {
  PublishJob,
  PublishResult,
} from "./types";

import { publishYouTube } from "./PublishYouTube";
import { publishFacebook } from "./PublishFacebook";
import { publishInstagram } from "./PublishInstagram";
import { publishTikTok } from "./PublishTikTok";
import { publishLinkedIn } from "./PublishLinkedIn";

export async function runSocialEngine(
  job: PublishJob
): Promise<PublishResult> {

  console.log("================================");
  console.log("SOCIAL ENGINE");
  console.log("================================");

  switch (job.platform) {

    case "youtube":
      return publishYouTube(job);

    case "facebook":
      return publishFacebook(job);

    case "instagram":
      return publishInstagram(job);

    case "tiktok":
      return publishTikTok(job);

    case "linkedin":
      return publishLinkedIn(job);

    default:
      throw new Error("Unsupported platform");
  }

}