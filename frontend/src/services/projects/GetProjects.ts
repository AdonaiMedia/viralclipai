import { getProjects } from "./GetProjects";
import { Project } from "@/types/Project";

export async function getProject(
  id: number
): Promise<Project | null> {
  const projects = await getProjects();

  return (
    projects.find(
      (project) => project.id === id
    ) ?? null
  );
}