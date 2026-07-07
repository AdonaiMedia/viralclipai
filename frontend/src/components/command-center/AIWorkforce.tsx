"use client";

const agents = [
  {
    name: "VisionAI",
    status: "Ready",
  },
  {
    name: "ClipMind",
    status: "Waiting",
  },
  {
    name: "ThumbForge",
    status: "Waiting",
  },
  {
    name: "TitleForge",
    status: "Waiting",
  },
  {
    name: "PublishFlow",
    status: "Waiting",
  },
];

export default function AIWorkforce() {

  return (

    <div className="rounded-2xl bg-slate-900 border border-slate-700 p-6">

      <h3 className="mb-6 text-2xl font-bold">

        AI Workforce

      </h3>

      <div className="space-y-4">

        {agents.map((agent) => (

          <div
            key={agent.name}
            className="flex items-center justify-between rounded-lg bg-slate-800 p-4"
          >

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-green-500" />

              <span className="font-medium">

                {agent.name}

              </span>

            </div>

            <span className="text-slate-400">

              {agent.status}

            </span>

          </div>

        ))}

      </div>

    </div>

  );

}