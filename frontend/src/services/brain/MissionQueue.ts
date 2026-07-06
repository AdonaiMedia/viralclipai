import { Mission } from "./Mission";

export class MissionQueue {
  private queue: Mission[] = [];

  add(mission: Mission) {
    this.queue.push(mission);
  }

  next(): Mission | undefined {
    return this.queue.shift();
  }

  peek(): Mission | undefined {
    return this.queue[0];
  }

  getAll(): Mission[] {
    return [...this.queue];
  }

  size(): number {
    return this.queue.length;
  }

  clear() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}