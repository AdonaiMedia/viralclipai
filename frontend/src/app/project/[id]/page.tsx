"use client";

import { useParams } from "next/navigation";

import ProjectProvider from "@/providers/ProjectProvider";

import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectTabs from "@/components/project/ProjectTabs";
import ProjectOverview from "@/components/project/ProjectOverview";

export default function ProjectDetailsPage() {

  const params = useParams();

  const projectId = Number(params.id);

  return (

    <ProjectProvider projectId={projectId}>

      <main className="min-h-screen bg-slate-900 text-white">

        <div className="p-8">

          <ProjectHeader />

          <ProjectTabs />

          <ProjectOverview />

        </div>

      </main>

    </ProjectProvider>

  );

}