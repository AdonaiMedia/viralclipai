"use client";

import {
  History,
  Clock3,
} from "lucide-react";

interface HistoryItem {
  title: string;
  content: string;
}

interface Props {
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
}

export default function AIHistory({
  history,
  onSelect,
}: Props) {
  if (history.length === 0) {
    return (
      <div className="rounded-3xl border border-[#4a3426] bg-[#15100c] p-8 text-center">

        <History className="mx-auto mb-4 h-12 w-12 text-orange-400" />

        <h2 className="text-xl font-bold text-white">
          AI History
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Your generated AI content will appear here.
        </p>

      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-[#4a3426] bg-[#15100c]">

      <div className="border-b border-[#4a3426] bg-[#201712] px-5 py-4">

        <div className="flex items-center gap-3">

          <History className="h-6 w-6 text-orange-400" />

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
              HISTORY
            </p>

            <h2 className="text-xl font-bold text-white">
              AI History
            </h2>

          </div>

        </div>

      </div>

      <div className="max-h-[520px] space-y-4 overflow-y-auto p-5">

        {history.map((item, index) => (

          <button
            key={index}
            onClick={() => onSelect(item)}
            className="w-full rounded-2xl border border-[#4a3426] bg-[#201712] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-[#2a1e17]"
          >

            <div className="mb-3 flex items-center justify-between">

              <h3 className="font-bold text-white">
                {item.title}
              </h3>

              <Clock3 className="h-4 w-4 text-orange-400" />

            </div>

            <p className="line-clamp-3 text-sm leading-6 text-slate-400">
              {item.content}
            </p>

          </button>

        ))}

      </div>

    </div>
  );
}