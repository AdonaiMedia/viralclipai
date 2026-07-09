import { PublisherRegistry } from "./PublisherRegistry";
import { YouTubePublisher } from "./adapters/YouTubePublisher";

PublisherRegistry.register(
  "youtube",
  new YouTubePublisher()
);