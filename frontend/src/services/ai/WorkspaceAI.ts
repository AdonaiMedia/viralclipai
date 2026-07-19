export async function runWorkspaceAI(
  videoId: number,
  action:
    | "title"
    | "hook"
    | "caption"
    | "hashtags"
    | "transcript"
    | "translate"
    | "voiceover"
    | "analysis"
    | "publish"
) {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      videoId,
      action,
    }),
  });

  if (!response.ok) {
    throw new Error("AI request failed");
  }

  return response.json();
}