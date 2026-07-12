export type AIProvider =
  | "openai"
  | "gemini";

export interface AIConfiguration {
  provider: AIProvider;
  fallbackProvider: AIProvider;

  temperature: number;

  maxTokens: number;

  retries: number;

  timeout: number;
}

export const AIConfig: AIConfiguration = {

  provider:
    (process.env.NEXT_PUBLIC_AI_PROVIDER as AIProvider)
      || "openai",

  fallbackProvider: "gemini",

  temperature: 0.7,

  maxTokens: 1000,

  retries: 2,

  timeout: 30000,

};