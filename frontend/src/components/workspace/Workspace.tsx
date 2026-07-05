"use client";

import VideoPreview from "./VideoPreview";
import AIAnalysis from "./AIAnalysis";
import ClipGallery from "./ClipGallery";
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