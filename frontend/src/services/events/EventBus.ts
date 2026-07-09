export type EventName =
  | "mission.created"
  | "mission.started"

  | "processing.updated"

  | "analysis.completed"
  | "clips.generated"
  | "thumbnail.generated"
  | "publishing.completed";

export type Listener<T = unknown> =
  (payload: T) => void | Promise<void>;

export class EventBus {

  private listeners = new Map<
    EventName,
    Listener[]
  >();

  on(
    event: EventName,
    listener: Listener
  ) {

    const current =
      this.listeners.get(event) ?? [];

    current.push(listener);

    this.listeners.set(event, current);

  }

  off(
    event: EventName,
    listener: Listener
  ) {

    const current =
      this.listeners.get(event);

    if (!current) return;

    this.listeners.set(
      event,
      current.filter(
        (item) => item !== listener
      )
    );

  }

  async emit(
    event: EventName,
    payload: unknown
  ) {

    const listeners =
      this.listeners.get(event) ?? [];

    for (const listener of listeners) {

      await listener(payload);

    }

  }

}