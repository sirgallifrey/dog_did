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
    { description: "New Weight Event data", title: "NewWeightEvent" }
);

/**
 * Weight Event
 */
export const WeightEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewWeightEventSchema], {
    description: "Weight Event data",
    title: "WeightEvent",
});
