import { Type } from "@sinclair/typebox";
import { IdObjectSchema, LiteralString } from "../common/base";
import { CreatedBySchema, EventTypes, NewBaseEventSchema } from "./base_event";

/**
 * New Food Event
 */
export const NewFoodEventSchema = Type.Composite(
    [
        NewBaseEventSchema,
        Type.Object({
            type: LiteralString(EventTypes.FOOD),
            grams: Type.Number(),
            food: Type.Optional(Type.String()),
        }),
    ],
    {
        description: "New Food Event data",
        title: "NewFoodEvent",
        examples: [
            {
                petId: "pb72whtdpn8drvktvwaf0dvfky",
                type: "food",
                food: "canned chicken",
                grams: 32,
                date: "2023-05-01T10:13:21Z",
                comments: "They didn't liked this brand very much!",
            },
        ],
    }
);

/**
 * Food Event
 */
export const FoodEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewFoodEventSchema], {
    description: "Food Event data",
    title: "FoodEvent",
    examples: NewFoodEventSchema.examples!.map((e) => ({
        id: "k02rpkdpg9rns109ny98vvcsgi",
        cleatedBy: "wpmgfffsv73wftje84x4smaupe",
        ...e,
    })),
});
