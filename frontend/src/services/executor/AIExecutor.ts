import { AgentRegistry } from "@/services/agents/AgentRegistry";
import { Task } from "@/services/brain/Task";

export class AIExecutor {

  async execute(tasks: Task[]) {

    const results = [];

    for (const task of tasks) {

      const agent =
        AgentRegistry.get(task.agent);

      if (!agent) {

        console.warn(
          `Agent not found: ${task.agent}`
        );

        continue;

      }

      console.log(
        `Executing ${task.name}`
      );

      const result =
        await agent.execute(task.payload);

      task.completed = true;

      results.push({

        task,

        result,

      });

    }

    return results;

  }

}