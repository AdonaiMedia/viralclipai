"use client";

import VideoPreview from "./VideoPreview";
import AIAnalysis from "./AIAnalysis";
import AITools from "./AITools";
import ClipGallery from "./ClipGallery";

interface Props {
  video?: any;
  analysis?: any;
  clips?: any[];
  publicUrl?: string;
}

export default function Workspace({
  video,
  analysis,
  clips = [],
  publicUrl = "",
}: Props) {
  return (
    <div className="space-y-6">

      {/* Top */}

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <VideoPreview
            video={video}
            publicUrl={publicUrl}
          />

        </div>

        <div>

          <AIAnalysis
            analysis={analysis}
          />

        </div>

      </div>

      {/* AI Tools */}

      <AITools
        onGenerateTitle={() => console.log("Generate Title")}
        onGenerateHook={() => console.log("Generate Hook")}
        onGenerateCaption={() => console.log("Generate Caption")}
        onGenerateHashtags={() => console.log("Generate Hashtags")}
        onGenerateTranscript={() => console.log("Generate Transcript")}
        onTranslate={() => console.log("Translate")}
        onVoiceOver={() => console.log("Voice Over")}
        onAnalyze={() => console.log("Analyze")}
        onPublish={() => console.log("Publish")}
      />

      {/* Generated Clips */}

      <ClipGallery
        clips={clips}
      />

    </div>
  );
}