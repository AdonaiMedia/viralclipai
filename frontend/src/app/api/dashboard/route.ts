import { NextResponse } from "next/server";
import { getDashboardData } from "@/services/dashboard/GetDashboardData";

export async function GET() {
  try {
    const dashboard = await getDashboardData();

    return NextResponse.json(dashboard);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to load dashboard",
      },
      {
        status: 500,
      }
    );

  }
}