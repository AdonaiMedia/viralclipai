import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function selectBestClips(
  viralMoments: string
) {

  const prompt = `
You are an expert viral content strategist.

From the viral moments below:

1. Rank the moments.
2. Select the best moments.
3. Give each moment:
   - Clip Number
   - Viral Score
   - Priority
   - Reason

Viral Moments:

${viralMoments}
`;

  const response =
    await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

  return response.choices[0].message.content;
}