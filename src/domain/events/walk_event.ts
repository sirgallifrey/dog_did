import { Id } from "../common/id";
import { BaseNewEventData, baseFromRawEvent, baseToRawEvent } from "./base_event";
import { EventTypes } from "./event_type";
import { RawEvent, UpsertRawEvent } from "./raw_event";

export interface NewWalkEventData extends Omit<BaseNewEventData, "type"> {
    type: typeof EventTypes.WALK;
    duration: number;
    kilometers: number;
}

export interface WalkEventData extends NewWalkEventData, Id {}

export function foodToRawEvent(data: NewWalkEventData | WalkEventData): UpsertRawEvent {
    const result = baseToRawEvent(data);
    result.duration = data.duration;
    result.number = data.kilometers;
    return result;
}

export function foodFromRawEvent(data: RawEvent): WalkEventData {
    const result = baseFromRawEvent(data) as WalkEventData;
    result.duration = data.duration || 0;
    result.kilometers = data.number || 0;
    return result;
}
