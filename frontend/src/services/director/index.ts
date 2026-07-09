import type { Mission } from "@/services/brain/Mission";

import { MissionRouter } from "./MissionRouter";

const router = new MissionRouter();

export async function runMission(
  mission: Mission
) {
  await router.dispatch(mission);
}

export * from "./CommandInterpreter";
export * from "./AutonomousDirector";
export * from "./MissionRouter";