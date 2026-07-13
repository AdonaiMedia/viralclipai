import { PublishJob } from "./types";

export async function schedulePost(
  job: PublishJob
): Promise<boolean> {

  console.log("================================");
  console.log("POST SCHEDULER");
  console.log("================================");

  console.log(job);

  /*
    Phase 2

    Cron Job
    Queue
    Background Worker
  */

  return true;

}