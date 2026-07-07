"use client";

interface Props {

  name: string;

  status: "waiting" | "running" | "completed";

}

export default function AgentStatusCard({
  name,
  status,
}: Props) {

  const color =
    status === "completed"
      ? "bg-green-500"
      : status === "running"
      ? "bg-blue-500 animate-pulse"
      : "bg-slate-500";

  return (

    <div className="rounded-xl bg-slate-800 p-4 flex items-center justify-between">

      <div className="font-semibold">

        {name}

      </div>

      <div className="flex items-center gap-2">

        <div
          className={`h-3 w-3 rounded-full ${color}`}
        />

        <span>

          {status}

        </span>

      </div>

    </div>

  );

}