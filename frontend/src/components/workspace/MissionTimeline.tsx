"use client";

interface Step {
  name: string;
  completed: boolean;
}

interface Props {
  steps: Step[];
}

export default function MissionTimeline({
  steps,
}: Props) {
  return (
    <div className="rounded-xl bg-slate-800 p-6">

      <h2 className="mb-6 text-xl font-bold">
        AI Workflow
      </h2>

      <div className="space-y-4">

        {steps.map((step, index) => (

          <div
            key={index}
            className="flex items-center gap-4"
          >

            <div
              className={`h-4 w-4 rounded-full ${
                step.completed
                  ? "bg-green-500"
                  : "bg-slate-600"
              }`}
            />

            <span>{step.name}</span>

          </div>

        ))}

      </div>

    </div>
  );
}