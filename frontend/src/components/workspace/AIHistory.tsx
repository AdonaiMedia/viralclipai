"use client";

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
    return null;
  }

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">
        AI History
      </h2>

      <div className="space-y-2">
        {history.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(item)}
            className="w-full rounded-lg border p-3 text-left hover:bg-gray-50"
          >
            <div className="font-semibold">
              {item.title}
            </div>

            <div className="mt-1 line-clamp-2 text-sm text-gray-500">
              {item.content}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}