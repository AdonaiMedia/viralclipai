import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const description = body.description || "";

    const prompt = `
You are an expert short-form video editor.

A user uploaded this video.

Description:
${description}

Your job is to suggest the BEST viral moments.

Return ONLY valid JSON.

Example:

[
  {
    "start":12,
    "end":32,
    "reason":"Powerful Hook"
  },
  {
    "start":65,
    "end":90,
    "reason":"Emotional Story"
  }
]
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are a professional viral video editor.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      clips: response.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "AI Error",
      },
      {
        status: 500,
      }
    );
  }
}