"use client";
import ViralCorePanel from "@/components/command-center/ViralCorePanel";
import AgentStatusCard from "./AgentStatusCard";

export default function CommandCenter() {

  return (

    <div className="space-y-4">

      <h2 className="text-2xl font-bold">

        🤖 AI Command Center

      </h2>

      <AgentStatusCard
        name="Analysis Agent"
        status="completed"
      />

      <AgentStatusCard
        name="Clip Agent"
        status="running"
      />

      <AgentStatusCard
        name="Thumbnail Agent"
        status="waiting"
      />

      <AgentStatusCard
        name="Title Agent"
        status="waiting"
      />

      <AgentStatusCard
        name="Publishing Agent"
        status="waiting"
      />

    </div>

  );

}