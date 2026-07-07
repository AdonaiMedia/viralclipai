"use client";

interface Props {
  percentage: number;
  message: string;
}

export default function ProcessingProgress({
  percentage,
  message,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-800 p-6">
      <h2 className="text-xl font-bold">
        ViralClip AI Processing
      </h2>

      <div className="mt-5 h-4 w-full rounded-full bg-slate-700">
        <div
          className="h-4 rounded-full bg-green-500 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-4 text-slate-300">
        {message}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {percentage}% Complete
      </p>
    </div>
  );
}