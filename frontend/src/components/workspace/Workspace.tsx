"use client";

import VideoPreview from "./VideoPreview";
import AIAnalysis from "./AIAnalysis";
import ClipGallery from "./ClipGallery";
import MissionTimeline from "./MissionTimeline";
import AITools from "./AITools";

interface Props {

  workspace: any;

  publicUrl: string;

}

export default function Workspace({

  workspace,

  publicUrl,

}: Props) {

  if (!workspace) {

    return null;

  }

  return (

    <div className="space-y-6">

      <VideoPreview
        video={workspace.video}
        publicUrl={publicUrl}
      />

      <MissionTimeline
  steps={[
    {
      name: "Video Uploaded",
      completed: true,
    },
    {
      name: "Video Analysis",
      completed: !!workspace.analysis,
    },
    {
      name: "Clip Generation",
      completed:
        workspace.clips?.length > 0,
    },
    {
      name: "Thumbnail Generation",
      completed: false,
    },
    {
      name: "Publishing",
      completed: false,
    },
  ]}
/>

      <AIAnalysis
        analysis={workspace.analysis}
      />

      <ClipGallery
        clips={workspace.clips}
      />

      <AITools />

    </div>

  );

}