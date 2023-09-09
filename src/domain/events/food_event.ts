import { Id } from "../common/id";
import { BaseNewEventData, baseFromRawEvent, baseToRawEvent } from "./base_event";
import { EventTypes } from "./event_type";
import { RawEvent, UpsertRawEvent } from "./raw_event";

export interface NewFoodEventData extends Omit<BaseNewEventData, "type"> {
    type: typeof EventTypes.FOOD;
    grams: number;
    food?: string;
}

export interface FoodEventData extends NewFoodEventData, Id {}

export function foodToRawEvent(data: NewFoodEventData | FoodEventData): UpsertRawEvent {
    const result = baseToRawEvent(data);
    result.number = data.grams;
    result.string = data.food;
    return result;
}

export function foodFromRawEvent(data: RawEvent): FoodEventData {
    const result = baseFromRawEvent(data) as FoodEventData;
    result.grams = data.number || 0;
    result.food = data.string ?? undefined;
    return result;
}
