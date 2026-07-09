import { PublishingPlatform } from "./PublishingJob";

export interface Publisher {
  publish(job: any): Promise<any>;
}

export class PublisherRegistry {
  private static publishers = new Map<
    PublishingPlatform,
    Publisher
  >();

  static register(
    platform: PublishingPlatform,
    publisher: Publisher
  ) {
    this.publishers.set(platform, publisher);
  }

  static get(
    platform: PublishingPlatform
  ) {
    return this.publishers.get(platform);
  }
}