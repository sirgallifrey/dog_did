import { Type } from "@sinclair/typebox";
import { IdObjectSchema, LiteralString } from "../common/base";
import { CreatedBySchema, EventTypes, NewBaseEventSchema } from "./base_event";

/**
 * New Poop Event
 */
export const NewPoopEventSchema = Type.Composite(
    [
        NewBaseEventSchema,
        Type.Object({
            type: LiteralString(EventTypes.POOP),
            description: Type.Optional(Type.String()),
        }),
    ],
    { description: "New Poop Event data", title: "NewPoopEvent" }
);

/**
 * Poop Event
 */
export const PoopEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewPoopEventSchema], {
    description: "Poop Event data",
    title: "PoopEvent",
});
