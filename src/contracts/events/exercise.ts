import { Type } from "@sinclair/typebox";
import { IdObjectSchema, LiteralString } from "../common/base";
import { CreatedBySchema, EventTypes, NewBaseEventSchema } from "./base_event";

/**
 * New Exercise Event
 */
export const NewExerciseEventSchema = Type.Composite(
    [
        NewBaseEventSchema,
        Type.Object({
            type: LiteralString(EventTypes.EXERCISE),
            duration: Type.Number(),
            activity: Type.Optional(Type.String()),
        }),
    ],
    { description: "New Exercise Event data", title: "NewExerciseEvent" }
);

/**
 * Exercise Event
 */
export const ExerciseEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewExerciseEventSchema], {
    description: "Exercise Event data",
    title: "ExerciseEvent",
});
