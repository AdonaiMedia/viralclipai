import type { UserMission } from "./MissionIntent";

export interface Decision {

  strategy:
    | "fast"
    | "balanced"
    | "quality";

  parallel: boolean;

  publish: boolean;

}

export class DecisionEngine {

  decide(
    mission: UserMission
  ): Decision {

    const publish =
      mission.intents.includes("publishing");

    const parallel =
      mission.intents.length > 2;

    return {

      strategy: parallel
        ? "balanced"
        : "quality",

      parallel,

      publish,

    };

  }

}