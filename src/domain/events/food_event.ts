import { BaseNewEventData, EventId, RawEvent, UpsertRawEvent, baseFromRawEvent, baseToRawEvent } from "./event";

export interface NewFoodEventData extends BaseNewEventData {
    grams: number;
    food: string | null;
}

export interface FoodEventData extends NewFoodEventData, EventId {}

export function foodToRawEvent(data: NewFoodEventData | FoodEventData): UpsertRawEvent {
    const result = baseToRawEvent(data);
    result.number = data.grams;
    result.string = data.food;
    return result;
}

export function foodFromRawEvent(data: RawEvent): FoodEventData {
    const result = baseFromRawEvent(data) as FoodEventData;
    result.grams = data.number || 0;
    result.food = data.string;
    return result;
}
