import { BaseNewEventData, EventId, RawEvent, UpsertRawEvent, baseFromRawEvent, baseToRawEvent } from "./event";

export interface NewWeightEventData extends BaseNewEventData {
    kilograms: number;
}

export interface WeightEventData extends NewWeightEventData, EventId {}

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
