export type EventName =
  | "mission.created"
  | "mission.started"
  | "analysis.completed"
  | "clips.generated"
  | "thumbnail.generated"
  | "publishing.completed";

type Listener = (payload: any) => void | Promise<void>;

export class EventBus {

  private listeners = new Map<EventName, Listener[]>();

  on(
    event: EventName,
    listener: Listener
  ) {

    const current =
      this.listeners.get(event) ?? [];

    current.push(listener);

    this.listeners.set(event, current);

  }

  async emit(
    event: EventName,
    payload: any
  ) {

    const listeners =
      this.listeners.get(event) ?? [];

    for (const listener of listeners) {

      await listener(payload);

    }

  }

}