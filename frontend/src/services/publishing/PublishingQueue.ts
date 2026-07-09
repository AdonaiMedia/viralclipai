import { PublishingJob } from "./PublishingJob";

export class PublishingQueue {
  private jobs: PublishingJob[] = [];

  add(job: PublishingJob) {
    this.jobs.push(job);
  }

  next() {
    return this.jobs.shift();
  }

  getAll() {
    return [...this.jobs];
  }

  clear() {
    this.jobs = [];
  }

  isEmpty() {
    return this.jobs.length === 0;
  }
}