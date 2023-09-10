import { Type } from "@sinclair/typebox";
import { IdObjectSchema, LiteralStringUnion } from "../common/base";
import { CreatedBySchema, EventTypes, NewBaseEventSchema } from "./base_event";

const examples = [
    {
        id: "unmmg24f28efepwy6ps58r7wey",
        createdBy: "wpmgfffsv73wftje84x4smaupe",
        petId: "pb72whtdpn8drvktvwaf0dvfky",
        type: "water",
        date: "2023-02-25T10:13:21Z",
        comments: "Finally!!",
    },
    {
        id: "j71ygs8mp1hasc1s9y0ym4nfoy",
        createdBy: "wpmgfffsv73wftje84x4smaupe",
        petId: "pb72whtdpn8drvktvwaf0dvfky",
        type: "other",
        date: "2023-02-25T10:13:21Z",
        comments: "They are feeling a bit down",
    },
    {
        id: "rnyb91erfa5mamtyxwneo0eauc",
        createdBy: "wpmgfffsv73wftje84x4smaupe",
        petId: "pb72whtdpn8drvktvwaf0dvfky",
        type: "play",
        date: "2023-02-25T13:13:21Z",
        comments: "They were running around the house",
    },
    {
        id: "i1r4j7pblgp81tzakirx5orinw",
        createdBy: "wpmgfffsv73wftje84x4smaupe",
        petId: "pb72whtdpn8drvktvwaf0dvfky",
        type: "pee",
        date: "2023-02-25T22:13:21Z",
    },
];

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
        examples: examples.map(({ id, createdBy, ...e }) => ({ ...e })),
    }
);

/**
 * Simple Event
 */
export const SimpleEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewSimpleEventSchema], {
    description:
        'Simple Event data\nSimple events are the ones that have no special data associated with them, like "pee" and "play"',
    title: "SimpleEvent",
    examples,
});
