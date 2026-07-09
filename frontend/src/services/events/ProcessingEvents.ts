import { EventBus } from "./EventBus";
import type { ProcessingEvent } from "./EventTypes";

export const processingBus =
  new EventBus();

export async function emitProcessingEvent(
  event: ProcessingEvent
) {
  await processingBus.emit(
    "processing.updated",
    event
  );
}