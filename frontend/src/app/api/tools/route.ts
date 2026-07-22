import { saveAIResult } from "@/services/database/saveAIResult";
import { generateMockPublish } from "@/services/ai/mock/publish";
import { generateMockViralAnalysis } from "@/services/ai/mock/viralAnalysis";
import { generateMockTitle } from "@/services/ai/mock/generateTitle";
import { generateMockHook } from "@/services/ai/mock/generateHook";
import { generateMockCaption } from "@/services/ai/mock/generateCaption";
import { generateMockHashtags } from "@/services/ai/mock/generateHashtags";
import { generateMockTranscript } from "@/services/ai/mock/generateTranscript";
import { generateMockTranslation } from "@/services/ai/mock/translate";
import { generateMockVoiceOver } from "@/services/ai/mock/voiceOver";
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

  await saveAIResult({
    videoId,
    tool: "title",
    title: "Generated Title",
    content: result.title,
  });

  return NextResponse.json({
    success: result.success,
    message: "Title generated successfully.",
    data: {
      title: result.title,
    },
  });
}
if (action === "hook") {
  const result = await generateMockHook();

  return NextResponse.json({
    success: result.success,
    message: "Hook generated successfully.",
    data: {
      hook: result.hook,
    },
  });
}
if (action === "caption") {
  const result = await generateMockCaption();

  return NextResponse.json({
    success: result.success,
    message: "Caption generated successfully.",
    data: {
      caption: result.caption,
    },
  });
}
if (action === "hashtags") {
  const result = await generateMockHashtags();

  return NextResponse.json({
    success: result.success,
    message: "Hashtags generated successfully.",
    data: {
      hashtags: result.hashtags,
    },
  });
}
if (action === "transcript") {
  const result = await generateMockTranscript();

  return NextResponse.json({
    success: result.success,
    message: "Transcript generated successfully.",
    data: {
      transcript: result.transcript,
    },
  });
}
if (action === "translate") {
  const result = await generateMockTranslation();

  return NextResponse.json({
    success: result.success,
    message: "Translation generated successfully.",
    data: {
      translation: result.translation,
    },
  });
}
if (action === "voiceover") {
  const result = await generateMockVoiceOver();

  return NextResponse.json({
    success: result.success,
    message: "Voice Over generated successfully.",
    data: {
      script: result.script,
    },
  });
}

if (action === "analysis") {
  const result = await generateMockViralAnalysis();

  return NextResponse.json({
    success: result.success,
    message: "Viral Analysis completed successfully.",
    data: {
      analysis: result.analysis,
    },
  });
}
if (action === "publish") {
  console.log("******** PUBLISH BLOCK EXECUTED ********");

  const result = await generateMockPublish();

  return NextResponse.json({
    success: result.success,
    message: result.message,
    data: {
      platforms: result.platforms,
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