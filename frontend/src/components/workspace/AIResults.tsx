"use client";

import {
  Copy,
  Download,
  RefreshCw,
} from "lucide-react";

interface Props {
  result: string;
  title: string;
}

export default function AIResults({
  result,
  title,
}: Props) {
  async function copyResult() {
    await navigator.clipboard.writeText(result);
    alert("Copied successfully.");
  }

  function downloadResult() {
    const blob = new Blob([result], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = `${title}.txt`;

    a.click();

    URL.revokeObjectURL(url);
  }

  if (!result) {
    return (
      <div className="rounded-xl border border-dashed bg-white p-10 text-center">
        <h2 className="mb-2 text-xl font-bold">
          AI Results
        </h2>

        <p className="text-gray-500">
          Run any AI tool to see the generated result here.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white shadow-sm">

      <div className="flex items-center justify-between border-b p-5">

        <div>

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <p className="text-sm text-gray-500">
            AI Generated Content
          </p>

        </div>

        <div className="flex gap-2">

          <button
            onClick={copyResult}
            className="rounded-lg border p-2 hover:bg-gray-100"
            title="Copy"
          >
            <Copy size={18} />
          </button>

          <button
            onClick={downloadResult}
            className="rounded-lg border p-2 hover:bg-gray-100"
            title="Download"
          >
            <Download size={18} />
          </button>

          <button
            className="rounded-lg border p-2 hover:bg-gray-100"
            title="Regenerate (Coming Soon)"
          >
            <RefreshCw size={18} />
          </button>

        </div>

      </div>

      <div className="p-5">

        <textarea
          readOnly
          value={result}
          className="min-h-[220px] w-full resize-none rounded-lg border bg-gray-50 p-4 outline-none"
        />

      </div>

    </div>
  );
}