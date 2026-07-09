export interface PerformanceRecord {
  projectId: number;

  platform:
    | "youtube"
    | "tiktok"
    | "instagram"
    | "facebook"
    | "x";

  views: number;

  likes: number;

  comments: number;

  shares: number;

  watchTime: number;

  averageViewDuration: number;

  ctr: number;

  retention: number;

  createdAt: Date;
}

export class PerformanceMemory {
  private records: PerformanceRecord[] = [];

  add(record: PerformanceRecord) {
    this.records.push(record);
  }

  getAll() {
    return this.records;
  }

  getByProject(projectId: number) {
    return this.records.filter(
      record => record.projectId === projectId
    );
  }

  getByPlatform(
    platform: PerformanceRecord["platform"]
  ) {
    return this.records.filter(
      record => record.platform === platform
    );
  }

  getAverageCTR() {
    if (this.records.length === 0) {
      return 0;
    }

    const total = this.records.reduce(
      (sum, record) => sum + record.ctr,
      0
    );

    return Number(
      (total / this.records.length).toFixed(2)
    );
  }

  getAverageRetention() {
    if (this.records.length === 0) {
      return 0;
    }

    const total = this.records.reduce(
      (sum, record) => sum + record.retention,
      0
    );

    return Number(
      (total / this.records.length).toFixed(2)
    );
  }

  getTotalViews() {
    return this.records.reduce(
      (sum, record) => sum + record.views,
      0
    );
  }

  getBestPerformingProject() {
    if (this.records.length === 0) {
      return undefined;
    }

    return [...this.records].sort(
      (a, b) => b.views - a.views
    )[0];
  }

  clear() {
    this.records = [];
  }
}