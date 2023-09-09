import { Id } from "../common/id";
import { BaseNewEventData, baseFromRawEvent, baseToRawEvent } from "./base_event";
import { EventTypes } from "./event_type";
import { RawEvent, UpsertRawEvent } from "./raw_event";

export interface NewPoopEventData extends Omit<BaseNewEventData, "type"> {
    type: typeof EventTypes.POOP;
    description?: string;
}

export interface PoopEventData extends NewPoopEventData, Id {}

export function foodToRawEvent(data: NewPoopEventData | PoopEventData): UpsertRawEvent {
    const result = baseToRawEvent(data);
    result.string = data.description;
    return result;
}

export function foodFromRawEvent(data: RawEvent): PoopEventData {
    const result = baseFromRawEvent(data) as PoopEventData;
    result.description = data.string ?? undefined;
    return result;
}
