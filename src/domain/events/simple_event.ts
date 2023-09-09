import { EventTypes } from "./event_type";
import { Id } from "../common/id";
import { BaseNewEventData, baseFromRawEvent, baseToRawEvent } from "./base_event";
import { RawEvent, UpsertRawEvent } from "./raw_event";

export type SimpleEventType =
    | typeof EventTypes.OTHER
    | typeof EventTypes.PEE
    | typeof EventTypes.PLAY
    | typeof EventTypes.WATER;

export interface NewSimpleEventData extends Omit<BaseNewEventData, "type"> {
    type: SimpleEventType;
}

export interface SimpleEventData extends NewSimpleEventData, Id {}

export function simpleToRawEvent(data: SimpleEventData | NewSimpleEventData): UpsertRawEvent {
    return baseToRawEvent(data);
}

export function simpleFromRawEvent(data: RawEvent): SimpleEventData {
    return baseFromRawEvent(data) as SimpleEventData;
}
