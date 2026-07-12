export interface NormalizedAIResponse {

  success: boolean;

  content: string;

  provider: string;

  model: string;

  tokens: number;

}

export function normalizeAIResponse(
  response: Partial<NormalizedAIResponse>
): NormalizedAIResponse {

  return {

    success:
      response.success ?? false,

    content:
      response.content ?? "",

    provider:
      response.provider ?? "unknown",

    model:
      response.model ?? "unknown",

    tokens:
      response.tokens ?? 0,

  };

}