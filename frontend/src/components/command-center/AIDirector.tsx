"use client";

import { Bot, Send } from "lucide-react";
import { useState } from "react";

interface Props {
  onExecute?: (prompt: string) => void;
}

export default function AIDirector({
  onExecute,
}: Props) {
  const [prompt, setPrompt] = useState("");

  function execute() {
    if (!prompt.trim()) return;

    onExecute?.(prompt);

    setPrompt("");
  }

  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

      <div className="mb-5 flex items-center gap-3">

        <Bot className="h-8 w-8 text-cyan-400" />

        <div>

          <h2 className="text-2xl font-bold text-white">
            AI Director
          </h2>

          <p className="text-sm text-slate-400">
            Tell ViralClip AI what you want to do.
          </p>

        </div>

      </div>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: Generate 5 YouTube Shorts with captions..."
        className="h-32 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-cyan-500"
      />

      <button
        onClick={execute}
        className="mt-5 flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
      >
        <Send className="h-5 w-5" />

        Execute Mission
      </button>

    </section>
  );
}