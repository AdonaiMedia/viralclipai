export interface ThumbnailRequest {

  videoFile: string;

  outputFile: string;

  second?: number;

}

export async function exportThumbnail(

  request: ThumbnailRequest

): Promise<string> {

  console.log("================================");
  console.log("EXPORT THUMBNAIL");
  console.log("================================");

  console.log(request);

  /*
    Phase 2

    FFmpeg screenshot extraction
  */

  return request.outputFile;

}