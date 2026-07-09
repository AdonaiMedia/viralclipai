export interface ProjectRecord {
  id: number;

  title: string;

  status:
    | "uploaded"
    | "processing"
    | "completed"
    | "published"
    | "failed";

  viralScore?: number;

  clipsGenerated: number;

  createdAt: Date;
}

export class ProjectMemory {
  private projects: ProjectRecord[] = [];

  add(project: ProjectRecord) {
    this.projects.push(project);
  }

  getAll() {
    return this.projects;
  }

  get(id: number) {
    return this.projects.find(
      (project) => project.id === id
    );
  }

  updateStatus(
    id: number,
    status: ProjectRecord["status"]
  ) {
    const project = this.get(id);

    if (!project) return;

    project.status = status;
  }

  updateScore(
    id: number,
    score: number
  ) {
    const project = this.get(id);

    if (!project) return;

    project.viralScore = score;
  }

  updateGeneratedClips(
    id: number,
    clips: number
  ) {
    const project = this.get(id);

    if (!project) return;

    project.clipsGenerated = clips;
  }

  getCompletedProjects() {
    return this.projects.filter(
      (project) => project.status === "completed"
    );
  }

  getPublishedProjects() {
    return this.projects.filter(
      (project) => project.status === "published"
    );
  }

  getAverageViralScore() {
    const scored = this.projects.filter(
      (project) => project.viralScore !== undefined
    );

    if (scored.length === 0) {
      return 0;
    }

    const total = scored.reduce(
      (sum, project) => sum + (project.viralScore ?? 0),
      0
    );

    return Math.round(total / scored.length);
  }

  clear() {
    this.projects = [];
  }
}