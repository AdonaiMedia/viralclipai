export interface TitleRequest {
  transcript: string;
  platform?: string;
  language?: string;
}

export interface TitleResult {
  success: boolean;
  title: string;
}

export async function generateTitle(
  request: TitleRequest
): Promise<TitleResult> {

  console.log("================================");
  console.log("TITLE GENERATOR");
  console.log("================================");

  const text = request.transcript.trim();

  const title =
    text.length > 60
      ? text.substring(0, 60) + "..."
      : text || "Untitled Video";

  return {
    success: true,
    title,
  };

}