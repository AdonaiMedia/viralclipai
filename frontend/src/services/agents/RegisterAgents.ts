import { AgentRegistry } from "./AgentRegistry";
import { RecapAgent } from "./RecapAgent";
import { AnalysisAgent } from "./AnalysisAgent";
import { ClipAgent } from "./ClipAgent";

let registered = false;

export function registerAgents() {

  if (registered) return;

  AgentRegistry.register(
    "analysis",
    new AnalysisAgent()
  );

  AgentRegistry.register(
    "clip",
    new ClipAgent()
  );
AgentRegistry.register(

  "recap",

  new RecapAgent()

);
  registered = true;

  console.log("✅ Agents Registered");

}