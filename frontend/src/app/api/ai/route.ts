import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is missing");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ViralClip {
  start: number;
  end: number;
  reason: string;
  viralScore: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.description || typeof body.description !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Description is required.",
        },
        {
          status: 400,
        }
      );
    }

    const prompt = `
You are an expert viral short-form video editor.

Analyze the following video description and identify the BEST viral moments.

Video Description:
${body.description}

Rules:

- Return ONLY a JSON array.
- Do not include markdown.
- Do not explain anything.
- Maximum 5 clips.
- Each clip should be between 10 and 60 seconds.
- Choose the most engaging moments.

JSON format:

[
  {
    "start": 10,
    "end": 28,
    "reason": "Strong opening hook",
    "viralScore": 97
  }
]
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",

      temperature: 0.3,

      max_tokens: 400,

      messages: [
        {
          role: "system",
          content:
            "You are a professional viral video editor. Return only valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const content = response.choices[0].message.content;

    if (!content) {
      throw new Error("Empty AI response.");
    }

    let clips: ViralClip[];

    try {
      clips = JSON.parse(content);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "AI returned invalid JSON.",
          raw: content,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      clips,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Unknown AI error",
      },
      {
        status: 500,
      }
    );
  }
}