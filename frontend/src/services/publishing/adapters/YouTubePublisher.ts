import { PublishingJob } from "../PublishingJob";

export class YouTubePublisher {
  async publish(job: PublishingJob) {
    console.log(
      "Publishing to YouTube..."
    );

    console.log(job);

    return {
      success: true,
    };
  }
}