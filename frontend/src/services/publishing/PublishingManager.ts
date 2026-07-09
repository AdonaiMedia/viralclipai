import { PublishingJob } from "./PublishingJob";
import { PublishingQueue } from "./PublishingQueue";

export class PublishingManager {
  private queue = new PublishingQueue();

  addJob(job: PublishingJob) {
    this.queue.add(job);
  }

  getJobs() {
    return this.queue.getAll();
  }

  async processNext() {
    const job = this.queue.next();

    if (!job) {
      return;
    }

    console.log(
      `Publishing to ${job.platform}...`
    );

    // Adapter itaitwa hapa baadaye

    job.status = "completed";

    console.log(
      `${job.platform} completed`
    );
  }
}