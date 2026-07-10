import { AgentRegistry } from "./AgentRegistry";

import { AnalysisAgent } from "./AnalysisAgent";
import { ClipAgent } from "./ClipAgent";
import { ThumbnailAgent } from "./ThumbnailAgent";
import { CaptionAgent } from "./CaptionAgent";
import { TitleAgent } from "./TitleAgent";
import { PublishingAgent } from "./PublishingAgent";
import { CoachAgent } from "./CoachAgent";

let initialized = false;

export function registerAgents() {

  if (initialized) {
    return;
  }

  AgentRegistry.register(
    "analysis",
    new AnalysisAgent()
  );

  AgentRegistry.register(
    "clip",
    new ClipAgent()
  );

  AgentRegistry.register(
    "thumbnail",
    new ThumbnailAgent()
  );

  AgentRegistry.register(
    "caption",
    new CaptionAgent()
  );

  AgentRegistry.register(
    "title",
    new TitleAgent()
  );

  AgentRegistry.register(
    "publishing",
    new PublishingAgent()
  );

  AgentRegistry.register(
    "coach",
    new CoachAgent()
  );

  initialized = true;

  console.log("================================");
  console.log("AI WORKFORCE READY");
  console.log("Registered Agents:");
  console.table(AgentRegistry.list());
}