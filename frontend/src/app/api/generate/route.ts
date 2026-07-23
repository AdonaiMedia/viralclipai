import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import { processVideo } from "@/services/jobs/processVideo";

export async function POST(request: Request) {
  try {
    console.log("================================");
    console.log("GENERATE API");
    console.log("================================");

    const body = await request.json();

    const videoId = Number(body.videoId);

    if (!videoId) {
      return NextResponse.json(
        {
          success: false,
          message: "videoId is required.",
        },
        {
          status: 400,
        }
      );
    }

    console.log("VIDEO ID:", videoId);

    const { error } = await supabaseServer
      .from("videos")
      .update({
        status: "processing",
      })
      .eq("id", videoId);

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    const result = await processVideo(videoId);

    console.log("PROCESS FINISHED");

    return NextResponse.json({
      success: true,
      message: "Video processed successfully.",
      data: result,
    });

  } catch (error) {

    console.error("GENERATE API ERROR");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      {
        status: 500,
      }
    );

  }
}