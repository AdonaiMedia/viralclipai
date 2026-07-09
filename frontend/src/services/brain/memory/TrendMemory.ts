export interface TrendRecord {
  id: string;

  platform:
    | "youtube"
    | "tiktok"
    | "instagram"
    | "facebook"
    | "x";

  topic: string;

  score: number;

  hashtags: string[];

  createdAt: Date;
}

export class TrendMemory {
  private trends: TrendRecord[] = [];

  add(trend: TrendRecord) {
    this.trends.push(trend);
  }

  getAll() {
    return this.trends;
  }

  getPlatformTrends(
    platform: TrendRecord["platform"]
  ) {
    return this.trends.filter(
      trend => trend.platform === platform
    );
  }

  getTopTrends(limit = 10) {
    return [...this.trends]
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  updateScore(
    id: string,
    score: number
  ) {
    const trend = this.trends.find(
      item => item.id === id
    );

    if (!trend) return;

    trend.score = score;
  }

  remove(
    id: string
  ) {
    this.trends = this.trends.filter(
      trend => trend.id !== id
    );
  }

  clear() {
    this.trends = [];
  }
}