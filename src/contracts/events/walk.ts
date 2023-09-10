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
            duration: Type.Number({ description: "Duration in minutes" }),
            kilometers: Type.Number(),
        }),
    ],
    {
        description: "New Walk Event data",
        title: "NewWalkEvent",
        examples: [
            {
                petId: "pb72whtdpn8drvktvwaf0dvfky",
                type: "walk",
                duration: 120,
                kilometers: 5,
                date: "2023-03-15T10:13:21Z",
            },
        ],
    }
);

/**
 * Walk Event
 */
export const WalkEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewWalkEventSchema], {
    description: "Walk Event data",
    title: "WalkEvent",
    examples: NewWalkEventSchema.examples!.map((e) => ({
        id: "gor9w6cr08h9tsh1g4mlah5r1r",
        cleatedBy: "wpmgfffsv73wftje84x4smaupe",
        ...e,
    })),
});
