import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import { processVideo } from "../../../services/jobs/processVideo";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const videoId = body.videoId;

    console.log("Generating clips for video:", videoId);

    // Badilisha status kuwa processing
    const { error } = await supabaseServer
      .from("videos")
      .update({
        status: "processing",
      })
      .eq("id", videoId);

    if (error) {
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

    // Anza processing
    const result = await processVideo(videoId);

    return NextResponse.json({
      success: true,
      message: "Processing started successfully.",
      data: result,
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