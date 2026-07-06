"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Project } from "@/types/Project";
import { getProjectById } from "@/services/projects/GetProjectById";

interface ProjectContextType {
  project: Project | null;
  loading: boolean;
  reload: () => Promise<void>;
}

const ProjectContext =
  createContext<ProjectContextType | null>(null);

interface Props {
  projectId: number;
  children: ReactNode;
}

export default function ProjectProvider({
  projectId,
  children,
}: Props) {

  const [project, setProject] =
    useState<Project | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function loadProject() {

    setLoading(true);

    const data =
      await getProjectById(projectId);

    setProject(data);

    setLoading(false);

  }

  useEffect(() => {

    loadProject();

  }, [projectId]);

  return (

    <ProjectContext.Provider
      value={{
        project,
        loading,
        reload: loadProject,
      }}
    >

      {children}

    </ProjectContext.Provider>

  );

}

export function useProject() {

  const context =
    useContext(ProjectContext);

  if (!context) {

    throw new Error(
      "useProject must be used inside ProjectProvider"
    );

  }

  return context;

}