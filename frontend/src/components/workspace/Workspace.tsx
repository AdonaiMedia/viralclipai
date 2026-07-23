"use client";

import { useState } from "react";

import {
  Sparkles,
  Brain,
  Wand2,
} from "lucide-react";

import VideoPreview from "./VideoPreview";
import AIAnalysis from "./AIAnalysis";
import AITools from "./AITools";
import AIResults from "./AIResults";
import AIHistory from "./AIHistory";
import ClipGallery from "./ClipGallery";

interface Clip {
  id: number | string;
  start_time: number;
  end_time: number;
  viral_score?: number;
}

interface Video {
  id: number;
  file_name?: string;
  status?: string;
}

interface Props {
  video?: Video;
  analysis?: unknown;
  clips?: Clip[];
  publicUrl?: string;
}

interface HistoryItem {
  title: string;
  content: string;
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

  const [history, setHistory] = useState<HistoryItem[]>([]);

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

  function selectHistory(item: HistoryItem) {
    setResultTitle(item.title);
    setResultContent(item.content);
  }

  async function runAI(action: string) {    if (!video) {
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

      if (result.data?.title) {
        saveResult(
          "Generated Title",
          result.data.title
        );
      } else if (result.data?.hook) {
        saveResult(
          "Generated Hook",
          result.data.hook
        );
      } else if (result.data?.caption) {
        saveResult(
          "Generated Caption",
          result.data.caption
        );
      } else if (result.data?.hashtags) {
        saveResult(
          "Generated Hashtags",
          result.data.hashtags
        );
      } else if (result.data?.transcript) {
        saveResult(
          "Transcript",
          result.data.transcript
        );
      } else if (result.data?.translation) {
        saveResult(
          "Translation",
          result.data.translation
        );
      } else if (result.data?.script) {
        saveResult(
          "Voice Over",
          result.data.script
        );
      } else if (result.data?.analysis) {
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
      } else if (result.data?.platforms) {
        saveResult(
          "Ready To Publish",
          `Platforms

- ${result.data.platforms.join("\n- ")}`
        );
      } else {
        saveResult(
          "AI Result",
          result.message ?? "Completed"
        );
      }

    } catch (error) {
      console.error(error);
      alert("AI request failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen rounded-3xl border border-[#3b2a1f] bg-gradient-to-b from-[#120d09] via-[#0f0f10] to-black p-8">

      {/* Header */}

      <div className="mb-8 flex flex-col justify-between gap-6 rounded-3xl border border-[#4b3424] bg-[#17110d] p-8 lg:flex-row lg:items-center">

        <div>

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">

            <Sparkles className="h-4 w-4" />

            ViralClip AI Workspace

          </div>

          <h1 className="text-4xl font-extrabold text-white">

            AI Content Studio

          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">

            Analyze videos, generate viral content, create clips,
            publish everywhere and manage your AI workflow from
            one professional dashboard.

          </p>

        </div>

        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-2xl border border-[#3b2a1f] bg-[#1a1410] p-5 text-center">

            <Brain className="mx-auto mb-3 h-8 w-8 text-red-400" />

            <p className="text-xs uppercase tracking-wide text-slate-500">

              AI

            </p>

            <h3 className="mt-2 text-xl font-bold text-white">

              Ready

            </h3>

          </div>

          <div className="rounded-2xl border border-[#3b2a1f] bg-[#1a1410] p-5 text-center">

            <Wand2 className="mx-auto mb-3 h-8 w-8 text-orange-400" />

            <p className="text-xs uppercase tracking-wide text-slate-500">

              Clips

            </p>

            <h3 className="mt-2 text-xl font-bold text-white">

              {clips.length}

            </h3>

          </div>

          <div className="rounded-2xl border border-[#3b2a1f] bg-[#1a1410] p-5 text-center">

            <Sparkles className="mx-auto mb-3 h-8 w-8 text-yellow-400" />

            <p className="text-xs uppercase tracking-wide text-slate-500">

              Status

            </p>

            <h3 className="mt-2 text-lg font-bold text-emerald-400">

              {video?.status ?? "Ready"}

            </h3>

          </div>

        </div>

      </div>
            {/* Main Workspace */}

      <div className="grid gap-6 xl:grid-cols-12">

        {/* Left Side */}

        <div className="space-y-6 xl:col-span-8">

          <div className="rounded-3xl border border-[#3b2a1f] bg-[#17110d] p-6">

            <VideoPreview
              video={video}
              publicUrl={publicUrl}
            />

          </div>

          <div className="rounded-3xl border border-[#3b2a1f] bg-[#17110d] p-6">

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

          </div>

          {loading && (

            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">

              <div className="flex items-center gap-3">

                <Brain className="h-6 w-6 animate-pulse text-amber-400" />

                <div>

                  <h3 className="font-semibold text-white">
                    ViralClip AI is working...
                  </h3>

                  <p className="text-sm text-slate-400">
                    Please wait while the AI generates your content.
                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

        {/* Right Side */}

        <div className="space-y-6 xl:col-span-4">

          <div className="rounded-3xl border border-[#3b2a1f] bg-[#17110d] p-6">

            <AIAnalysis
              analysis={analysis}
            />

          </div>

          <div className="rounded-3xl border border-[#3b2a1f] bg-[#17110d] p-6">

            <AIHistory
              history={history}
              onSelect={selectHistory}
            />

          </div>

        </div>

      </div>      {/* Bottom Section */}

      <div className="mt-6 grid gap-6 xl:grid-cols-12">

        <div className="space-y-6 xl:col-span-8">

          <div className="rounded-3xl border border-[#3b2a1f] bg-[#17110d] p-6">

            <AIResults
              title={resultTitle}
              result={resultContent}
            />

          </div>

          <div className="rounded-3xl border border-[#3b2a1f] bg-[#17110d] p-6">

            <ClipGallery
              clips={clips}
            />

          </div>

        </div>

        <div className="xl:col-span-4">

          <div className="rounded-3xl border border-[#3b2a1f] bg-gradient-to-br from-[#22170f] to-[#17110d] p-6">

            <h2 className="mb-5 text-xl font-bold text-white">
              Workspace Summary
            </h2>

            <div className="space-y-4">

              <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">

                <span className="text-slate-400">
                  Video ID
                </span>

                <span className="font-semibold text-white">
                  {video?.id ?? "-"}
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">

                <span className="text-slate-400">
                  Clips Generated
                </span>

                <span className="font-semibold text-emerald-400">
                  {clips.length}
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">

                <span className="text-slate-400">
                  AI History
                </span>

                <span className="font-semibold text-cyan-400">
                  {history.length}
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-black/20 p-4">

                <span className="text-slate-400">
                  Status
                </span>

                <span className="font-semibold text-orange-400">
                  {video?.status ?? "Ready"}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}