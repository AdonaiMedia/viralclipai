import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateTitle(
  description: string
): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",

      temperature: 0.8,

      max_tokens: 60,

      messages: [
        {
          role: "system",
          content:
            "You are a world-class viral YouTube Shorts, TikTok and Facebook Reels title writer.",
        },
        {
          role: "user",
          content: `
Create ONE short, powerful viral title.

Video:
${description}

Rules:

- Maximum 12 words.
- High CTR.
- No quotation marks.
- Return ONLY the title.
`,
        },
      ],
    });

    return (
      response.choices[0].message.content?.trim() ??
      "Untitled"
    );
  } catch (error) {
    console.error("Generate Title Error:", error);
    throw error;
  }
}