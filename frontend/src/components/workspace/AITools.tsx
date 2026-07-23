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
  ChevronRight,
  BrainCircuit,
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
  category: string;
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
      description: "High CTR YouTube titles.",
      icon: Type,
      color: "text-blue-400",
      category: "Writing",
      action: onGenerateTitle,
    },
    {
      title: "Generate Hook",
      description: "First 3 seconds optimization.",
      icon: Sparkles,
      color: "text-yellow-400",
      category: "Writing",
      action: onGenerateHook,
    },
    {
      title: "Generate Caption",
      description: "Social media captions.",
      icon: MessageSquare,
      color: "text-green-400",
      category: "Writing",
      action: onGenerateCaption,
    },
    {
      title: "Generate Hashtags",
      description: "Trending hashtag research.",
      icon: Hash,
      color: "text-pink-400",
      category: "SEO",
      action: onGenerateHashtags,
    },
    {
      title: "Transcript",
      description: "Speech to text.",
      icon: FileText,
      color: "text-cyan-400",
      category: "AI",
      action: onGenerateTranscript,
    },
    {
      title: "Translate",
      description: "Translate content instantly.",
      icon: Languages,
      color: "text-orange-400",
      category: "Language",
      action: onTranslate,
    },
    {
      title: "Voice Over",
      description: "Generate AI narration.",
      icon: Mic,
      color: "text-violet-400",
      category: "Voice",
      action: onVoiceOver,
    },
    {
      title: "Viral Analysis",
      description: "Predict engagement.",
      icon: TrendingUp,
      color: "text-emerald-400",
      category: "Analytics",
      action: onAnalyze,
    },
    {
      title: "Publish",
      description: "Publish everywhere.",
      icon: Send,
      color: "text-red-400",
      category: "Distribution",
      action: onPublish,
    },
  ];

  return (
    <Card>
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2">

            <BrainCircuit className="h-4 w-4 text-orange-400" />

            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              ViralClip AI Workspace
            </span>

          </div>

          <h2 className="mt-5 text-3xl font-bold text-white">
            AI Command Center
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400">
            Generate titles, captions, hooks, translations, transcripts,
            voice overs and publish content using one intelligent workspace.
          </p>

        </div>

        <div className="grid grid-cols-3 gap-3">

          <Stat
            label="Tools"
            value="9"
          />

          <Stat
            label="Status"
            value="Ready"
          />

          <Stat
            label="AI"
            value="Online"
          />

        </div>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {tools.map((tool) => {

          const Icon = tool.icon;

          return (

            <button
              key={tool.title}
              type="button"
              onClick={() => tool.action?.()}
              className="group rounded-3xl border border-[#453024] bg-[#15100c] p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
            >

              <div className="flex items-center justify-between">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-[#201712] ${tool.color}`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <span className="rounded-full border border-slate-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {tool.category}
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {tool.title}
              </h3>

              <p className="mt-3 min-h-[52px] text-sm leading-6 text-slate-400">
                {tool.description}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-sm font-semibold text-orange-400">
                  Launch Tool
                </span>

                <ChevronRight className="h-5 w-5 text-orange-400 transition group-hover:translate-x-2" />

              </div>

            </button>

          );

        })}

      </div>
    </Card>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#453024] bg-[#15100c] px-5 py-4 text-center">

      <div className="text-2xl font-bold text-white">
        {value}
      </div>

      <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">
        {label}
      </div>

    </div>
  );
}