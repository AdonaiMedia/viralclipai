import { PublishResult } from "./types";

export async function savePublishHistory(

  videoId: number,

  result: PublishResult

): Promise<boolean> {

  console.log("================================");
  console.log("PUBLISH HISTORY");
  console.log("================================");

  console.log(videoId);

  console.log(result);

  /*
    Phase 2

    Save into Supabase
  */

  return true;

}