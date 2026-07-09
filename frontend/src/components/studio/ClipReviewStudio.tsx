"use client";
import ViralMomentsPanel from "./ViralMomentsPanel";
import VideoPreviewPlayer from "./VideoPreviewPlayer";
import VideoTimeline from "./VideoTimeline";

export default function ClipReviewStudio() {
  return (
    <section className="space-y-6">

      <h2 className="text-2xl font-bold text-white">
        Clip Review Studio
      </h2>

      <VideoPreviewPlayer
        title="Current Video"
      />

      <VideoTimeline />
<ViralMomentsPanel />
    </section>
  );
}