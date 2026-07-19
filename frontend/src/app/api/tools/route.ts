import { generateTitle } from "@/services/ai/tools/generateTitle";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      action,
      videoId,
    } = body;

    if (!action) {
      return NextResponse.json(
        {
          success: false,
          message: "Action is required.",
        },
        {
          status: 400,
        }
      );
    }

    console.log("================================");
    console.log("AI TOOL REQUEST");
    console.log("================================");
    console.log("Video:", videoId);
    console.log("Action:", action);

   if (action === "title") {
  const title = await generateTitle(
    `Video ID ${videoId}`
  );

  return NextResponse.json({
    success: true,
    message: "Title generated successfully.",
    data: {
      title,
    },
  });
}

return NextResponse.json({
  success: true,
  message: `${action} is connected.`,
});

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}