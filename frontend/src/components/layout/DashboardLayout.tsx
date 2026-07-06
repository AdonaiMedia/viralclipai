"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import UploadCard from "@/components/dashboard/UploadCard";
import VideosList from "@/components/dashboard/VideosList";
import StatsCards from "@/components/dashboard/StatsCards";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import AICoachWidget from "@/components/dashboard/AICoachWidget";

import { getDashboardData } from "@/services/dashboard/GetDashboardData";
import { getDashboardStats } from "@/services/dashboard/GetDashboardStats";

import type {
  DashboardVideo,
  DashboardStats,
} from "@/types/Dashboard";

export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null);

  const [videos, setVideos] = useState<DashboardVideo[]>([]);

  const [stats, setStats] = useState<DashboardStats>({
    totalVideos: 0,
    totalClips: 0,
    averageScore: 0,
    completedVideos: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const dashboardData = await getDashboardData();
    setVideos(dashboardData);

    const dashboardStats = await getDashboardStats();
    setStats(dashboardStats);
  }

  async function uploadVideo() {
    if (!file) {
      alert("Please select a video");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      return;
    }

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("videos")
      .upload(fileName, file);

    if (error) {
      alert("Upload failed");
      return;
    }

    const { error: dbError } = await supabase
      .from("videos")
      .insert([
        {
          user_id: user.id,
          file_name: fileName,
          file_url: fileName,
          status: "uploaded",
        },
      ]);

    if (dbError) {
      alert("Database save failed");
      return;
    }

    setFile(null);

    await loadDashboard();
  }

  async function deleteVideo(
    fileName: string,
    id: number
  ) {
    await supabase.storage
      .from("videos")
      .remove([fileName]);

    await supabase
      .from("videos")
      .delete()
      .eq("id", id);

    await loadDashboard();
  }

  async function generateClip(id: number) {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        videoId: id,
      }),
    });

    const result = await response.json();

    alert(result.message);

    await loadDashboard();
  }

  return (
    <main className="space-y-8">

      <h1 className="text-4xl font-bold">
        ViralClip AI Dashboard
      </h1>

      <StatsCards
        totalVideos={stats.totalVideos}
        totalClips={stats.totalClips}
        averageScore={stats.averageScore}
        completedVideos={stats.completedVideos}
      />

      <UploadCard
        onSelectFile={setFile}
        onUpload={uploadVideo}
      />

      <QuickActions />

      <div className="rounded-xl bg-slate-800 p-6">
        <h2 className="mb-6 text-2xl font-bold">
          My Videos
        </h2>

        <VideosList
          videos={videos}
          onDelete={deleteVideo}
          onGenerate={generateClip}
        />
      </div>

      <RecentActivity />

      <AICoachWidget
        score={stats.averageScore}
      />

    </main>
  );
}