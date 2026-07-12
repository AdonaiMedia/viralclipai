export interface GeminiProviderRequest {
  systemPrompt: string;
  userPrompt: string;
  temperature?: number;
  maxTokens?: number;
}

export interface GeminiProviderResponse {
  success: boolean;
  content: string;
  provider: string;
  model: string;
  tokens: number;
}

export async function runGemini(
  request: GeminiProviderRequest
): Promise<GeminiProviderResponse> {
  try {
    /*
      TODO:
      Hapa baadaye tutaunganisha
      Google Gemini API.
    */

    console.log("================================");
    console.log("GEMINI PROVIDER");
    console.log("================================");

    console.log(request);

    return {
      success: true,

      content:
        "Gemini provider is ready. API integration coming next.",

      provider: "Gemini",

      model: "gemini-2.5-pro",

      tokens: 0,
    };
  } catch (error) {
    console.error(
      "GEMINI PROVIDER ERROR",
      error
    );

    return {
      success: false,

      content: "",

      provider: "Gemini",

      model: "unknown",

      tokens: 0,
    };
  }
}