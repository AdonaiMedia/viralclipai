"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

import UploadCard from "@/components/dashboard/UploadCard";
import ProjectGrid from "@/components/dashboard/ProjectGrid";
import StatsCards from "@/components/dashboard/StatsCards";

import { getProjects } from "@/services/projects/GetProjects";
import { getDashboardStats } from "@/services/dashboard/GetDashboardStats";

export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null);

  const [projects, setProjects] = useState<any[]>([]);

  const [stats, setStats] = useState({
    totalVideos: 0,
    totalClips: 0,
    averageScore: 0,
    completedVideos: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const projectData = await getProjects();
    setProjects(projectData);

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
      console.error(error);
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
      console.error(dbError);
      alert("Database save failed");
      return;
    }

    alert("Video uploaded successfully.");

    loadDashboard();
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

    loadDashboard();
  }

  async function generateClip(
    id: number
  ) {
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

    loadDashboard();
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        ViralClip AI Dashboard
      </h1>

      <StatsCards
        totalVideos={stats.totalVideos}
        totalClips={stats.totalClips}
        averageScore={stats.averageScore}
        completedVideos={stats.completedVideos}
      />

      <UploadCard
        onUpload={uploadVideo}
        onSelectFile={setFile}
      />

      <div className="bg-slate-800 p-6 rounded-xl mt-8">

        <h2 className="text-2xl font-bold mb-6">
          My Projects
        </h2>

        <ProjectGrid
          projects={projects}
          onGenerate={generateClip}
          onDelete={(id: number) => {
            const project = projects.find(
              (p: any) => p.id === id
            );

            if (!project) return;

            deleteVideo(
              project.video.fileName,
              id
            );
          }}
          onOpen={(id: number) => {
            console.log("Open Project:", id);
          }}
          onPublish={(id: number) => {
            console.log("Publish Project:", id);
          }}
        />

      </div>

    </main>
  );
}