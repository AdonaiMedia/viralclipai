import { getProjects } from "./GetProjects";
import { Project } from "@/types/Project";

export async function getProjectById(
  id: number
): Promise<Project | null> {
  const projects = await getProjects();

  return (
    projects.find(
      (project: Project) => project.id === id
    ) ?? null
  );
}