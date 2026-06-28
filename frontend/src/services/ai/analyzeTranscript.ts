import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeTranscript(
  transcript: string
) {
  try {

    console.log("Analyzing transcript...");

    const prompt = `
You are one of the world's best viral short-form video editors.

Your task is to analyze the transcript and identify the BEST viral moments.

Look for:

- Strong hooks
- Emotional moments
- Funny moments
- Inspirational moments
- Storytelling
- Powerful quotes
- Surprising facts
- Call to action
- Audience retention

Return ONLY valid JSON.

Example:

[
  {
    "start":0,
    "end":25,
    "score":98,
    "title":"Amazing Hook",
    "reason":"This opening grabs attention immediately."
  }
]

Transcript:

${transcript}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      response_format: {
        type: "json_object"
      },
      messages: [
        {
          role: "system",
          content:
            "You are an expert viral video editor."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error(error);
    throw error;
  }
}