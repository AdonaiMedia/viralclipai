"use client";

import VideoPreview from "./VideoPreview";
import AIAnalysis from "./AIAnalysis";
import AITools from "./AITools";
import ClipGallery from "./ClipGallery";

interface Clip {
  id: number | string;
  start_time: number;
  end_time: number;
  viral_score?: number;
}

interface Props {
  video?: unknown;
  analysis?: unknown;
  clips?: Clip[];
  publicUrl?: string;
}

export default function Workspace({
  video,
  analysis,
  clips = [],
  publicUrl = "",
}: Props) {
  return (
    <div className="space-y-4">

      {/* Top Section */}

      <div className="grid gap-4 xl:grid-cols-12">

        {/* Video */}

        <div className="xl:col-span-8">

          <VideoPreview
            video={video}
            publicUrl={publicUrl}
          />

        </div>

        {/* AI Analysis */}

        <div className="xl:col-span-4">

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

      {/* Clip Gallery */}

      <ClipGallery
      
        clips={clips}
      />

    </div>
  );
}