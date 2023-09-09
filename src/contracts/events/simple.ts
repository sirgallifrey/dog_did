import { Type } from "@sinclair/typebox";
import { IdObjectSchema, LiteralStringUnion } from "../common/base";
import { CreatedBySchema, EventTypes, NewBaseEventSchema } from "./base_event";

/**
 * New Simple Event
 */
export const NewSimpleEventSchema = Type.Composite(
    [
        NewBaseEventSchema,
        Type.Object({
            type: LiteralStringUnion([EventTypes.OTHER, EventTypes.PEE, EventTypes.PLAY, EventTypes.WATER]),
        }),
    ],
    {
        description:
            'New Simple Event data.\nSimple events are the ones that have no special data associated with them, like "pee" and "play"',
        title: "NewSimpleEvent",
    }
);

/**
 * Simple Event
 */
export const SimpleEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewSimpleEventSchema], {
    description:
        'Simple Event data\nSimple events are the ones that have no special data associated with them, like "pee" and "play"',
    title: "SimpleEvent",
});
