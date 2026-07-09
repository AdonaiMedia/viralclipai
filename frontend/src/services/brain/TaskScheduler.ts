import type { Task } from "./Task";

import { AgentRegistry } from "@/services/agents/AgentRegistry";

export class TaskScheduler {

  async run(
    tasks: Task[]
  ) {

    const completed =
      new Set<string>();

    while (
      completed.size < tasks.length
    ) {

      const readyTasks =
        tasks.filter(task => {

          if (
            completed.has(task.id)
          ) {
            return false;
          }

          if (
            !task.dependsOn ||
            task.dependsOn.length === 0
          ) {
            return true;
          }

          task.dependsOn.every((id: string) =>
  completed.has(id)
);

        });

      if (
        readyTasks.length === 0
      ) {

        throw new Error(
          "Task dependency deadlock detected."
        );

      }

      await Promise.all(

        readyTasks.map(async task => {

          const agent =
            AgentRegistry.get(task.agent);

          if (!agent) {

            console.warn(
              `${task.agent} not registered`
            );

            completed.add(task.id);

            return;

          }

          console.log(
            `Running ${task.agent}`
          );

          await agent.execute(
            task.payload
          );

          task.completed = true;

          completed.add(task.id);

        })

      );

    }

  }

}