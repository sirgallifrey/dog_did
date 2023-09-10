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
    {
        description: "New Poop Event data",
        title: "NewPoopEvent",
        examples: [
            {
                petId: "pb72whtdpn8drvktvwaf0dvfky",
                type: "poop",
                description: "soft",
                date: "2023-02-15T10:13:21Z",
                comments: "Probably because of the bone they were eating",
            },
        ],
    }
);

/**
 * Poop Event
 */
export const PoopEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewPoopEventSchema], {
    description: "Poop Event data",
    title: "PoopEvent",
    examples: NewPoopEventSchema.examples!.map((e) => ({
        id: "upjf8nqc28hdzaf587604xh1ca",
        cleatedBy: "wpmgfffsv73wftje84x4smaupe",
        ...e,
    })),
});
