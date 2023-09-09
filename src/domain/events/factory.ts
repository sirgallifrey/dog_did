import { Event, NewEvent } from "./event";
import { BaseEventData, BaseNewEventData } from "./base_event";
import { EventTypes } from "./event_type";
import { RawEvent, UpsertRawEvent } from "./raw_event";
import { NewFoodEventData, FoodEventData, foodToRawEvent, foodFromRawEvent } from "./food_event";
import { NewWeightEventData, WeightEventData, weightFromRawEvent, weightToRawEvent } from "./weight_event";
import { NewSimpleEventData, SimpleEventData, simpleFromRawEvent, simpleToRawEvent } from "./simple_event";

export type ToRawNewEventTypes = BaseNewEventData | NewEvent;

export type ToRawEventTypes = BaseEventData | Event | ToRawNewEventTypes;

export function toRawEvent(event: ToRawEventTypes): UpsertRawEvent {
    switch (event.type) {
        case EventTypes.WEIGHT:
            return weightToRawEvent(event as WeightEventData | NewWeightEventData);
        case EventTypes.FOOD:
            return foodToRawEvent(event as NewFoodEventData | FoodEventData);
        case EventTypes.EXERCISE:
            throw new Error("Not Implemented");
        case EventTypes.MEDICINE:
            throw new Error("Not Implemented");
        case EventTypes.POOP:
            throw new Error("Not Implemented");
        case EventTypes.WALK:
            throw new Error("Not Implemented");
        default:
            return simpleToRawEvent(event as SimpleEventData | NewSimpleEventData);
    }
}

export function fromRawEvent(raw: RawEvent): Event {
    switch (raw.type) {
        case EventTypes.WEIGHT:
            return weightFromRawEvent(raw);
        case EventTypes.FOOD:
            return foodFromRawEvent(raw);
        case EventTypes.EXERCISE:
            throw new Error("Not Implemented");
        case EventTypes.MEDICINE:
            throw new Error("Not Implemented");
        case EventTypes.POOP:
            throw new Error("Not Implemented");
        case EventTypes.WALK:
            throw new Error("Not Implemented");
        default:
            return simpleFromRawEvent(raw);
    }
}
