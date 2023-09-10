import { Event, NewEvent } from "./event";
import { BaseEventData, BaseNewEventData } from "./base_event";
import { EventTypes } from "./event_type";
import { RawEvent, UpsertRawEvent } from "./raw_event";
import { NewFoodEventData, FoodEventData, foodToRawEvent, foodFromRawEvent } from "./food_event";
import { NewWeightEventData, WeightEventData, weightFromRawEvent, weightToRawEvent } from "./weight_event";
import { NewSimpleEventData, SimpleEventData, simpleFromRawEvent, simpleToRawEvent } from "./simple_event";
import { ExerciseEventData, NewExerciseEventData, exerciseFromRawEvent, exerciseToRawEvent } from "./exercise_event";
import { MedicineEventData, NewMedicineEventData, medicineFromRawEvent, medicineToRawEvent } from "./medicine_event";
import { NewPoopEventData, PoopEventData, poopFromRawEvent, poopToRawEvent } from "./poop_event";
import { NewWalkEventData, WalkEventData, walkFromRawEvent, walkToRawEvent } from "./walk_event";

export type ToRawNewEventTypes = BaseNewEventData | NewEvent;

export type ToRawEventTypes = BaseEventData | Event | ToRawNewEventTypes;

export function toRawEvent(event: ToRawEventTypes): UpsertRawEvent {
    switch (event.type) {
        case EventTypes.WEIGHT:
            return weightToRawEvent(event as WeightEventData | NewWeightEventData);
        case EventTypes.FOOD:
            return foodToRawEvent(event as NewFoodEventData | FoodEventData);
        case EventTypes.EXERCISE:
            return exerciseToRawEvent(event as NewExerciseEventData | ExerciseEventData);
        case EventTypes.MEDICINE:
            return medicineToRawEvent(event as NewMedicineEventData | MedicineEventData);
        case EventTypes.POOP:
            return poopToRawEvent(event as NewPoopEventData | PoopEventData);
        case EventTypes.WALK:
            return walkToRawEvent(event as NewWalkEventData | WalkEventData);
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
            return exerciseFromRawEvent(raw);
        case EventTypes.MEDICINE:
            return medicineFromRawEvent(raw);
        case EventTypes.POOP:
            return poopFromRawEvent(raw);
        case EventTypes.WALK:
            return walkFromRawEvent(raw);
        default:
            return simpleFromRawEvent(raw);
    }
}
