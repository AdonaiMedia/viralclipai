"use client";
import AIResults from "./AIResults";
import AIHistory from "./AIHistory";
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

const [resultTitle, setResultTitle] = useState("");

const [resultContent, setResultContent] = useState("");

const [history, setHistory] = useState<
  {
    title: string;
    content: string;
  }[]
>([]);
function saveResult(
  title: string,
  content: string
) {
  setResultTitle(title);

  setResultContent(content);

  setHistory((previous) => [
    {
      title,
      content,
    },
    ...previous,
  ]);
}
function selectHistory(item: {
  title: string;
  content: string;
}) {
  setResultTitle(item.title);
  setResultContent(item.content);
}
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


if (result.data?.title) {
  saveResult(
    "Generated Title",
    result.data.title
  );

  return;
}

if (result.data?.hook) {
  saveResult(
    "Generated Hook",
    result.data.hook
  );

  return;
}

if (result.data?.caption) {
  saveResult(
    "Generated Caption",
    result.data.caption
  );

  return;
}

if (result.data?.hashtags) {
  saveResult(
    "Generated Hashtags",
    result.data.hashtags
  );

  return;
}

if (result.data?.transcript) {
  saveResult(
    "Generated Transcript",
    result.data.transcript
  );

  return;
}

if (result.data?.translation) {
  saveResult(
    "Translation",
    result.data.translation
  );

  return;
}

if (result.data?.script) {
  saveResult(
    "Voice Over",
    result.data.script
  );

  return;
}

if (result.data?.analysis) {
  const analysis = result.data.analysis;

  saveResult(
    "Viral Analysis",
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
  saveResult(
    "Ready to Publish",
`Platforms:

- ${result.data.platforms.join("\n- ")}`
  );

  return;
}

saveResult(
  "AI",
  result.message ?? "Completed"
);
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

<div className="grid gap-4 lg:grid-cols-3">

  <div className="lg:col-span-2">
    <AIResults
      title={resultTitle}
      result={resultContent}
    />
  </div>

  <div>
    <AIHistory
      history={history}
      onSelect={selectHistory}
    />
  </div>

</div>

<ClipGallery clips={clips} />



      <ClipGallery clips={clips} />
    </div>
  );
}