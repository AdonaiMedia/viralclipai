export interface UserPreference {
  category: string;
  value: string;
}

export interface UserStatistic {
  uploadedVideos: number;
  generatedClips: number;
  publishedVideos: number;
  averageViralScore: number;
}

export interface UserMemoryState {
  creatorId: string;

  preferences: UserPreference[];

  statistics: UserStatistic;

  lastMission?: string;

  createdAt: Date;

  updatedAt: Date;
}

export class UserMemory {
  private state: UserMemoryState;

  constructor(creatorId: string) {
    this.state = {
      creatorId,

      preferences: [],

      statistics: {
        uploadedVideos: 0,
        generatedClips: 0,
        publishedVideos: 0,
        averageViralScore: 0,
      },

      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  getState(): UserMemoryState {
    return this.state;
  }

  setPreference(
    category: string,
    value: string
  ) {
    const existing = this.state.preferences.find(
      (item) => item.category === category
    );

    if (existing) {
      existing.value = value;
    } else {
      this.state.preferences.push({
        category,
        value,
      });
    }

    this.touch();
  }

  incrementUploads() {
    this.state.statistics.uploadedVideos++;

    this.touch();
  }

  incrementGeneratedClips(
    amount = 1
  ) {
    this.state.statistics.generatedClips += amount;

    this.touch();
  }

  incrementPublishedVideos() {
    this.state.statistics.publishedVideos++;

    this.touch();
  }

  updateAverageViralScore(
    score: number
  ) {
    this.state.statistics.averageViralScore = score;

    this.touch();
  }

  setLastMission(
    missionId: string
  ) {
    this.state.lastMission = missionId;

    this.touch();
  }

  private touch() {
    this.state.updatedAt = new Date();
  }
}