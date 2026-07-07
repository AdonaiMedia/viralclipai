"use client";

import { useEffect, useState } from "react";

import StudioHeader from "./StudioHeader";

import ViralCorePanel from "@/components/command-center/ViralCorePanel";
import AIWorkforce from "@/components/command-center/AIWorkforce";

import UploadCard from "@/components/dashboard/UploadCard";
import ProcessingProgress from "@/components/dashboard/ProcessingProgress";
import CommandCenter from "@/components/command-center/CommandCenter";
import VideosList from "@/components/dashboard/VideosList";

import { useUploadVideo } from "@/hooks/useUploadVideo";
import { useVideoActions } from "@/hooks/useVideoActions";
import { useProjects } from "@/hooks/useProjects";

import { getDashboardData } from "@/services/dashboard/GetDashboardData";

import type { DashboardVideo } from "@/types/Dashboard";

export default function CreatorCommandCenter() {

  const [file, setFile] = useState<File | null>(null);

  const [videos, setVideos] = useState<DashboardVideo[]>([]);

  const { refresh } = useProjects();

  const { upload, uploading } = useUploadVideo();

  const {
    deleteVideo,
    generateClip,
  } = useVideoActions();

  async function loadVideos() {

    const data = await getDashboardData();

    setVideos(data);

  }

  useEffect(() => {

    loadVideos();

  }, []);

  async function handleUpload() {

    if (!file) return;

    const success = await upload(file);

    if (success) {

      alert("Upload completed successfully.");

      setFile(null);

      await refresh();

      await loadVideos();

    }

  }

  return (

    <div className="space-y-8">

      <StudioHeader />

      <ViralCorePanel />

      <AIWorkforce />

      <UploadCard
        onSelectFile={setFile}
        onUpload={handleUpload}
      />

      {uploading && (

        <ProcessingProgress
          percentage={15}
          message="Uploading video..."
        />

      )}

      <CommandCenter />

      <VideosList
        videos={videos}
        onDelete={async (fileName, id) => {

          await deleteVideo(fileName, id);

          await loadVideos();

        }}
        onGenerate={async (id) => {

          const result = await generateClip(id);

          alert(result.message);

          await loadVideos();

        }}
      />

    </div>

  );

}