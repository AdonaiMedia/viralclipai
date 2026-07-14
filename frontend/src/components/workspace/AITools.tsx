"use client";

import {
  Type,
  Sparkles,
  Hash,
  MessageSquare,
  Languages,
  Mic,
  FileText,
  TrendingUp,
  Send,
} from "lucide-react";

import Card from "@/components/ui/Card";

interface Props {
  onGenerateTitle?: () => void;
  onGenerateHook?: () => void;
  onGenerateCaption?: () => void;
  onGenerateHashtags?: () => void;
  onGenerateTranscript?: () => void;
  onTranslate?: () => void;
  onVoiceOver?: () => void;
  onAnalyze?: () => void;
  onPublish?: () => void;
}

export default function AITools({
  onGenerateTitle,
  onGenerateHook,
  onGenerateCaption,
  onGenerateHashtags,
  onGenerateTranscript,
  onTranslate,
  onVoiceOver,
  onAnalyze,
  onPublish,
}: Props) {
  const tools = [
    {
      title: "Generate Title",
      icon: Type,
      color: "text-blue-400",
      action: onGenerateTitle,
    },
    {
      title: "Generate Hook",
      icon: Sparkles,
      color: "text-yellow-400",
      action: onGenerateHook,
    },
    {
      title: "Generate Caption",
      icon: MessageSquare,
      color: "text-emerald-400",
      action: onGenerateCaption,
    },
    {
      title: "Generate Hashtags",
      icon: Hash,
      color: "text-pink-400",
      action: onGenerateHashtags,
    },
    {
      title: "Transcript",
      icon: FileText,
      color: "text-cyan-400",
      action: onGenerateTranscript,
    },
    {
      title: "Translate",
      icon: Languages,
      color: "text-orange-400",
      action: onTranslate,
    },
    {
      title: "Voice Over",
      icon: Mic,
      color: "text-violet-400",
      action: onVoiceOver,
    },
    {
      title: "Viral Score",
      icon: TrendingUp,
      color: "text-green-400",
      action: onAnalyze,
    },
    {
      title: "Publish",
      icon: Send,
      color: "text-red-400",
      action: onPublish,
    },
  ];

  return (
    <Card>

      <div className="mb-6">

        <h2 className="text-xl font-bold text-white">
          AI Tools
        </h2>

        <p className="text-sm text-slate-400">
          Generate content and optimize your video with AI.
        </p>

      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <button
              key={tool.title}
              type="button"
              onClick={() => tool.action?.()}
              className="group rounded-xl border border-slate-800 bg-slate-900 p-4 text-left transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-800"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800">

                <Icon
                  className={`h-5 w-5 ${tool.color}`}
                />

              </div>

              <h3 className="font-semibold text-white">
                {tool.title}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                AI powered
              </p>

            </button>
          );
        })}

      </div>

    </Card>
  );
}