"use client";

import { Project } from "@/types/Project";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onOpen?: (id: number) => void;
  onGenerate?: (id: number) => void;
  onPublish?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function ProjectGrid({
  projects,
  onOpen,
  onGenerate,
  onPublish,
  onDelete,
}: ProjectGridProps) {

  if (projects.length === 0) {
    return (
      <div className="bg-slate-800 rounded-xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-3">
          No Projects Yet
        </h2>

        <p className="text-slate-400">
          Upload your first video to create a project.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {projects.map((project) => (

        <ProjectCard
          key={project.id}
          project={project}
          onOpen={onOpen}
          onGenerate={onGenerate}
          onPublish={onPublish}
          onDelete={onDelete}
        />

      ))}

    </div>
  );
}