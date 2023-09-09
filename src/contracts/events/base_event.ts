import { Type } from "@sinclair/typebox";
import { DateTimeSchema, IdObjectSchema, IdSchema } from "../common/base";

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

/**
 * New Base Event
 */
export const NewBaseEventSchema = Type.Object(
    {
        // type not added here on purpose!
        petId: IdSchema(),
        date: DateTimeSchema(),
        comments: Type.Optional(Type.String()),
    },
    { description: "New Event data" }
);

export const CreatedBySchema = Type.Object({
    createdBy: IdSchema(),
});

/**
 * Base Event
 */
export const BaseEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewBaseEventSchema], {
    description: "Event data",
});
