import { BaseEventData, BaseNewEventData, EventType, UpsertRawEvent, baseToRawEvent } from "./event";
import { NewFoodEventData, FoodEventData, foodToRawEvent } from "./food_event";
import { NewWeightEventData, WeightEventData, weightToRawEvent } from "./weight_event";

type ToRawEventTypes =
    | BaseNewEventData
    | BaseEventData
    | NewFoodEventData
    | FoodEventData
    | WeightEventData
    | NewWeightEventData;

export function toRawEvent(event: ToRawEventTypes): UpsertRawEvent {
    switch (event.type) {
        case EventType.weight:
            return weightToRawEvent(event as WeightEventData | NewWeightEventData);
        case EventType.food:
            return foodToRawEvent(event as NewFoodEventData | FoodEventData);
        default:
            return baseToRawEvent(event);
    }
}
