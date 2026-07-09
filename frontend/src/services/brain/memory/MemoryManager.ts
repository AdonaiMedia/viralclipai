import { UserMemory } from "./UserMemory";
import { ProjectMemory } from "./ProjectMemory";
import { TrendMemory } from "./TrendMemory";
import { PerformanceMemory } from "./PerformanceMemory";

export class MemoryManager {
  readonly user: UserMemory;

  readonly projects: ProjectMemory;

  readonly trends: TrendMemory;

  readonly performance: PerformanceMemory;

  constructor(creatorId: string) {
    this.user = new UserMemory(creatorId);

    this.projects = new ProjectMemory();

    this.trends = new TrendMemory();

    this.performance = new PerformanceMemory();
  }

  clearAll() {
    this.projects.clear();

    this.trends.clear();

    this.performance.clear();
  }

  getSummary() {
    return {
      creator: this.user.getState(),

      totalProjects:
        this.projects.getAll().length,

      totalTrends:
        this.trends.getAll().length,

      totalPerformanceRecords:
        this.performance.getAll().length,

      averageProjectScore:
        this.projects.getAverageViralScore(),

      averageCTR:
        this.performance.getAverageCTR(),

      averageRetention:
        this.performance.getAverageRetention(),

      totalViews:
        this.performance.getTotalViews(),
    };
  }
}