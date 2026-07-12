"use client";

import { useEffect, useState } from "react";

import type { DashboardVideo } from "@/types/Dashboard";

import { getDashboardData } from "@/services/dashboard/GetDashboardData";

import { useAIProcessing } from "@/hooks/useAIProcessing";
import { useProjects } from "@/hooks/useProjects";
import { useUploadVideo } from "@/hooks/useUploadVideo";
import { useVideoActions } from "@/hooks/useVideoActions";

import StudioHeader from "./StudioHeader";

import AnalyticsOverview from "@/components/dashboard/AnalyticsOverview";
import UploadCard from "@/components/dashboard/UploadCard";
import VideosList from "@/components/dashboard/VideosList";

import AIProcessingTimeline from "@/components/processing/AIProcessingTimeline";
import ProcessingProgress from "@/components/progress/ProcessingProgress";

export default function CreatorCommandCenter() {
  const [file, setFile] = useState<File | null>(null);
  const [videos, setVideos] = useState<DashboardVideo[]>([]);

  const { refresh } = useProjects();
  const { upload, uploading } = useUploadVideo();

  const {
    steps,
    reset,
    startStep,
    completeStep,
  } = useAIProcessing();

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

    reset();

    startStep("upload");

    const success = await upload(file);

    if (!success) return;

    completeStep("upload");

    startStep("audio");

    setTimeout(() => {
      completeStep("audio");

      startStep("transcript");

      setTimeout(() => {
        completeStep("transcript");

        startStep("viral");

        setTimeout(() => {
          completeStep("viral");

          startStep("clips");

          setTimeout(() => {
            completeStep("clips");

            startStep("captions");

            setTimeout(() => {
              completeStep("captions");

              startStep("thumbnail");

              setTimeout(() => {
                completeStep("thumbnail");

                startStep("publish");

                setTimeout(async () => {
                  completeStep("publish");

                  setFile(null);

                  await refresh();
                  await loadVideos();
                }, 700);
              }, 700);
            }, 700);
          }, 700);
        }, 700);
      }, 700);
    }, 700);
  }

  return (
    <div className="space-y-5">

      {/* Header */}
      <StudioHeader />

      {/* Analytics */}
      <AnalyticsOverview />

      {/* Upload + Processing */}
      <div className="grid gap-5 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <UploadCard
            onSelectFile={setFile}
            onUpload={handleUpload}
          />

        </div>

        <div className="space-y-4">

          <AIProcessingTimeline
            steps={steps}
          />

          {uploading && (

            <ProcessingProgress
              percentage={15}
              message="Uploading video..."
            />

          )}

        </div>

      </div>

      {/* Uploaded Videos */}

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