"use client";

import { useRouter } from "next/navigation";
import { Project } from "@/types/Project";

interface ProjectCardProps {
  project: Project;
  onGenerate?: (id: number) => void;
  onPublish?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const statusColors = {
  uploaded: "bg-gray-500",
  processing: "bg-yellow-500",
  analyzing: "bg-blue-500",
  generating: "bg-purple-500",
  completed: "bg-green-600",
  failed: "bg-red-600",
};

export default function ProjectCard({
  project,
  onGenerate,
  onPublish,
  onDelete,
}: ProjectCardProps) {
  const router = useRouter();

  const score = project.analysis?.overallScore ?? "--";

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 overflow-hidden shadow-lg hover:border-cyan-500 transition">

      <div className="h-44 bg-slate-900 flex items-center justify-center">
        {project.thumbnail?.url ? (
          <img
            src={project.thumbnail.url}
            alt={project.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-6xl">🎬</span>
        )}
      </div>

      <div className="p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold truncate">
            {project.name}
          </h2>

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              statusColors[project.video.status]
            }`}
          >
            {project.video.status}
          </span>

        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">

          <div>
            <p className="text-slate-400 text-sm">
              AI Score
            </p>

            <h3 className="text-2xl font-bold text-green-400">
              {score}
            </h3>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Clips
            </p>

            <h3 className="text-2xl font-bold">
              {project.clips.length}
            </h3>
          </div>

        </div>

        <div className="mt-5 text-sm text-slate-400">
          Created
          <br />
          {new Date(project.video.createdAt).toLocaleDateString()}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">

          <button
            onClick={() => router.push(`/project/${project.id}`)}
            className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold hover:bg-cyan-700"
          >
            Open
          </button>

          <button
            onClick={() => onGenerate?.(project.id)}
            className="rounded-lg bg-green-600 px-4 py-2 font-semibold hover:bg-green-700"
          >
            Generate
          </button>

          <button
            onClick={() => onPublish?.(project.id)}
            className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold hover:bg-indigo-700"
          >
            Publish
          </button>

          <button
            onClick={() => onDelete?.(project.id)}
            className="rounded-lg bg-red-600 px-4 py-2 font-semibold hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}