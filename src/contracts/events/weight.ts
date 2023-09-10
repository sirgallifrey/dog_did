import { Type } from "@sinclair/typebox";
import { IdObjectSchema, LiteralString } from "../common/base";
import { CreatedBySchema, EventTypes, NewBaseEventSchema } from "./base_event";

/**
 * New Weight Event
 */
export const NewWeightEventSchema = Type.Composite(
    [
        NewBaseEventSchema,
        Type.Object({
            type: LiteralString(EventTypes.WEIGHT),
            kilograms: Type.Number({ description: "Pet weight in kilograms" }),
        }),
    ],
    {
        description: "New Weight Event data",
        title: "NewWeightEvent",
        examples: [
            {
                petId: "pb72whtdpn8drvktvwaf0dvfky",
                type: "weight",
                kilograms: 5.5,
                date: "2023-04-01T10:13:21Z",
                comments: "New diet is slowly giving results",
            },
        ],
    }
);

/**
 * Weight Event
 */
export const WeightEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewWeightEventSchema], {
    description: "Weight Event data",
    title: "WeightEvent",
    examples: NewWeightEventSchema.examples!.map((e) => ({
        id: "sts9ky8jccddc49x3vb5yi37ia",
        cleatedBy: "wpmgfffsv73wftje84x4smaupe",
        ...e,
    })),
});
