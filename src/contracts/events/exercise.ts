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
            duration: Type.Number({ description: "Duration in minutes" }),
            activity: Type.Optional(Type.String()),
        }),
    ],
    {
        description: "New Exercise Event data",
        title: "NewExerciseEvent",
        examples: [
            {
                petId: "pb72whtdpn8drvktvwaf0dvfky",
                type: "exercise",
                activity: "catching ball",
                duration: 30,
                date: "2023-01-10T10:13:21Z",
                comments: "",
            },
        ],
    }
);

/**
 * Exercise Event
 */
export const ExerciseEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewExerciseEventSchema], {
    description: "Exercise Event data",
    title: "ExerciseEvent",
    examples: NewExerciseEventSchema.examples!.map((e) => ({
        id: "xjgope47ktmscjgtd4d6p3ng4j",
        cleatedBy: "wpmgfffsv73wftje84x4smaupe",
        ...e,
    })),
});
