export interface CaptionRequest {
  transcript: string;
  title?: string;
  platform?: string;
}

export interface CaptionResult {
  success: boolean;
  caption: string;
}

export async function generateCaption(
  request: CaptionRequest
): Promise<CaptionResult> {

  console.log("================================");
  console.log("CAPTION GENERATOR");
  console.log("================================");

  const caption =
    request.transcript.length > 180
      ? request.transcript.substring(0, 180) + "..."
      : request.transcript;

  return {
    success: true,
    caption,
  };
}