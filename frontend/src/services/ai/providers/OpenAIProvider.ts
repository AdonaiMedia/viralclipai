import OpenAI from "openai";

export interface AIProviderRequest {
  systemPrompt: string;
  userPrompt: string;
  temperature?: number;
  maxTokens?: number;
}

export interface AIProviderResponse {
  success: boolean;
  content: string;
  provider: string;
  model: string;
  tokens: number;
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runOpenAI(
  request: AIProviderRequest
): Promise<AIProviderResponse> {
  try {
    const response =
      await client.chat.completions.create({
        model: "gpt-5.5",

        temperature:
          request.temperature ?? 0.7,

        max_completion_tokens:
          request.maxTokens ?? 300,

        messages: [
          {
            role: "system",
            content: request.systemPrompt,
          },
          {
            role: "user",
            content: request.userPrompt,
          },
        ],
      });

    return {
      success: true,

      content:
        response.choices[0]?.message?.content ?? "",

      provider: "OpenAI",

      model: response.model,

      tokens:
        response.usage?.total_tokens ?? 0,
    };
  } catch (error) {

    console.error(
      "OPENAI PROVIDER ERROR",
      error
    );

    return {
      success: false,

      content: "",

      provider: "OpenAI",

      model: "unknown",

      tokens: 0,
    };
  }
}