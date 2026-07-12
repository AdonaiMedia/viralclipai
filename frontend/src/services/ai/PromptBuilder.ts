import { AIContentRequest } from "./types";

export class PromptBuilder {

  static title(
    request: AIContentRequest
  ) {

    return `
Generate a highly clickable YouTube title.

Topic:
${request.topic}

Language:
${request.language}

Platform:
${request.platform}
`;

  }

  static caption(
    request: AIContentRequest
  ) {

    return `
Create a viral social media caption.

Topic:
${request.topic}

Platform:
${request.platform}

Language:
${request.language}
`;

  }

  static hashtags(
    request: AIContentRequest
  ) {

    return `
Generate trending hashtags.

Topic:
${request.topic}

Platform:
${request.platform}
`;

  }

  static hook(
    request: AIContentRequest
  ) {

    return `
Find the strongest opening hook.

Transcript:

${request.transcript}
`;

  }

}