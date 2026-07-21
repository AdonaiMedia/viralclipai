"use client";

import { useState } from "react";

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

interface Video {
  id: number;
}

interface Props {
  video?: Video;
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
  const [loading, setLoading] = useState(false);

  async function runAI(action: string) {
    if (!video) {
      alert("No video selected.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/tools", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoId: video.id,
          action,
        }),
      });

      const result = await response.json();

      console.log("================================");
      console.log("AI TOOL RESPONSE");
      console.log("================================");
      console.log(result);

      if (!result.success) {
        alert(result.message);
        return;
      }
if (result.data?.title) {
  alert(result.data.title);
  return;
}

if (result.data?.hook) {
  alert(result.data.hook);
  return;
}

if (result.data?.caption) {
  alert(result.data.caption);
  return;
}

if (result.data?.hashtags) {
  alert(result.data.hashtags.join(" "));
  return;
}

if (result.data?.transcript) {
  alert(result.data.transcript);
  return;
}

if (result.data?.translation) {
  alert(result.data.translation);
  return;
}

if (result.data?.script) {
  alert(result.data.script);
  return;
}

if (result.data?.analysis) {
  const analysis = result.data.analysis;

  alert(
`Viral Score: ${analysis.score}

Engagement: ${analysis.engagement}

Strengths:
- ${analysis.strengths.join("\n- ")}

Improvements:
- ${analysis.improvements.join("\n- ")}`
  );

  return;
}
if (result.data?.platforms) {
  alert(
`✅ Ready to Publish

Platforms:

- ${result.data.platforms.join("\n- ")}`
  );

  return;
}
alert(result.message ?? "Completed");
alert(result.message ?? "Completed");
alert(result.message ?? "Completed");

alert(result.message ?? "Completed");
    } catch (error) {
      console.error(error);
      alert("AI request failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <VideoPreview
            video={video}
            publicUrl={publicUrl}
          />
        </div>

        <div className="xl:col-span-4">
          <AIAnalysis
            analysis={analysis}
          />
        </div>
      </div>

      <AITools
        onGenerateTitle={() => runAI("title")}
        onGenerateHook={() => runAI("hook")}
        onGenerateCaption={() => runAI("caption")}
        onGenerateHashtags={() => runAI("hashtags")}
        onGenerateTranscript={() => runAI("transcript")}
        onTranslate={() => runAI("translate")}
        onVoiceOver={() => runAI("voiceover")}
        onAnalyze={() => runAI("analysis")}
        onPublish={() => runAI("publish")}
      />

      {loading && (
        <div className="rounded-xl bg-blue-600 p-3 text-center text-white">
          AI is processing...
        </div>
      )}

      <ClipGallery clips={clips} />
    </div>
  );
}