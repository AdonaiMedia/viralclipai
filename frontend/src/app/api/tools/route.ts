
import { generateMockTitle } from "@/services/ai/mock/generateTitle";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("******** MOCK ROUTE IS RUNNING ********");

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
  const result = await generateMockTitle();

  return NextResponse.json({
    success: result.success,
    message: "Title generated successfully.",
    data: {
      title: result.title,
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