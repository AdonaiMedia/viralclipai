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

interface ToolItem {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  action?: () => void;
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
  const tools: ToolItem[] = [
    {
      title: "Generate Title",
      description: "Create high CTR viral titles.",
      icon: Type,
      color: "text-blue-400",
      action: onGenerateTitle,
    },
    {
      title: "Generate Hook",
      description: "Create attention-grabbing hooks.",
      icon: Sparkles,
      color: "text-yellow-400",
      action: onGenerateHook,
    },
    {
      title: "Generate Caption",
      description: "Write engaging social captions.",
      icon: MessageSquare,
      color: "text-emerald-400",
      action: onGenerateCaption,
    },
    {
      title: "Generate Hashtags",
      description: "Find trending hashtags automatically.",
      icon: Hash,
      color: "text-pink-400",
      action: onGenerateHashtags,
    },
    {
      title: "Transcript",
      description: "Convert speech into text.",
      icon: FileText,
      color: "text-cyan-400",
      action: onGenerateTranscript,
    },
    {
      title: "Translate",
      description: "Translate your content instantly.",
      icon: Languages,
      color: "text-orange-400",
      action: onTranslate,
    },
    {
      title: "Voice Over",
      description: "Generate natural AI voice.",
      icon: Mic,
      color: "text-violet-400",
      action: onVoiceOver,
    },
    {
      title: "Viral Analysis",
      description: "Predict viral performance.",
      icon: TrendingUp,
      color: "text-green-400",
      action: onAnalyze,
    },
    {
      title: "Publish",
      description: "Publish to all social platforms.",
      icon: Send,
      color: "text-red-400",
      action: onPublish,
    },
  ];

  return (    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Toolbox
          </h2>

          <p className="text-sm text-slate-400">
            Professional AI tools to optimize your content.
          </p>
        </div>

        <div className="rounded-full bg-emerald-500/10 px-3 py-1">
          <span className="text-xs font-semibold text-emerald-400">
            9 AI Tools
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div
              key={tool.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
                  <Icon className={`h-6 w-6 ${tool.color}`} />
                </div>

                <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-400">
                  AI
                </span>
              </div>

              <h3 className="mt-5 font-bold text-white">
                {tool.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {tool.description}
              </p>

              <button
                type="button"
                onClick={() => tool.action?.()}
                className="mt-5 w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Run AI
              </button>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

