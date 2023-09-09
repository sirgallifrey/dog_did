import { Type } from "@sinclair/typebox";
import { IdObjectSchema, LiteralString } from "../common/base";
import { CreatedBySchema, EventTypes, NewBaseEventSchema } from "./base_event";

/**
 * New Walk Event
 */
export const NewWalkEventSchema = Type.Composite(
    [
        NewBaseEventSchema,
        Type.Object({
            type: LiteralString(EventTypes.WALK),
            duration: Type.Number(),
            kilometers: Type.Number(),
        }),
    ],
    { description: "New Walk Event data", title: "NewWalkEvent" }
);

/**
 * Walk Event
 */
export const WalkEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewWalkEventSchema], {
    description: "Walk Event data",
    title: "WalkEvent",
});
