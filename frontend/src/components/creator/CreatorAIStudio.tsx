"use client";

import type { Mission } from "@/services/brain/Mission";

import { interpretCommand } from "@/services/director";

import StudioHeader from "./StudioHeader";

import ViralCorePanel from "@/components/command-center/ViralCorePanel";
import AIWorkforce from "@/components/command-center/AIWorkforce";
import AIDirector from "@/components/command-center/AIDirector";
import MissionActivityFeed from "@/components/command-center/MissionActivityFeed";
import MissionControl from "@/components/command-center/MissionControl";
import CommandCenter from "@/components/command-center/CommandCenter";

export default function CreatorAIStudio() {
  return (
    <div className="space-y-8">

      <StudioHeader />

      <ViralCorePanel />

      <AIWorkforce />

      <AIDirector
        onExecute={async (prompt) => {
          const command = interpretCommand(prompt);

          const mission: Mission = {
            id: crypto.randomUUID(),
            creatorId: "local-user",
            type: command.type,
            status: "pending",
            payload: {
              prompt: command.prompt,
            },
            createdAt: new Date(),
          };

          console.log("MISSION CREATED");
          console.log(mission);

          // TODO:
          // POST /api/missions/run
        }}
      />

      <MissionActivityFeed />

      <MissionControl />

      <CommandCenter />

    </div>
  );
}