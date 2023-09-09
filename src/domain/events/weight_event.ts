import { Id } from "../common/id";
import { BaseNewEventData, baseFromRawEvent, baseToRawEvent } from "./base_event";
import { EventTypes } from "./event_type";
import { RawEvent, UpsertRawEvent } from "./raw_event";

export interface NewWeightEventData extends Omit<BaseNewEventData, "type"> {
    type: typeof EventTypes.WEIGHT;
    kilograms: number;
}

export interface WeightEventData extends NewWeightEventData, Id {}

export function weightToRawEvent(data: NewWeightEventData | WeightEventData): UpsertRawEvent {
    const result = baseToRawEvent(data);
    result.number = data.kilograms;
    return result;
}

export function weightFromRawEvent(data: RawEvent): WeightEventData {
    const result = baseFromRawEvent(data) as WeightEventData;
    result.kilograms = data.number || 0;
    return result;
}
