import { ValueOf } from "type-fest";

export const EventTypes = {
    EXERCISE: "exercise",
    FOOD: "food",
    MEDICINE: "medicine",
    OTHER: "other",
    PEE: "pee",
    PLAY: "play",
    POOP: "poop",
    WALK: "walk",
    WATER: "water",
    WEIGHT: "weight",
} as const;

export type EventType = ValueOf<typeof EventTypes>;
