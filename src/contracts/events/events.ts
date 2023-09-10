import { Type } from "@sinclair/typebox";
import { FoodEventSchema, NewFoodEventSchema } from "./food";
import { NewWeightEventSchema, WeightEventSchema } from "./weight";
import { ExerciseEventSchema, NewExerciseEventSchema } from "./exercise";
import { MedicineEventSchema, NewMedicineEventSchema } from "./medicine";
import { NewSimpleEventSchema, SimpleEventSchema } from "./simple";
import { NewPoopEventSchema, PoopEventSchema } from "./poop";
import { NewWalkEventSchema, WalkEventSchema } from "./walk";
import { PaginatedSchema } from "../common/pagination";

export * from "./exercise";
export * from "./food";
export * from "./medicine";
export * from "./poop";
export * from "./simple";
export * from "./walk";
export * from "./weight";

const AnyNewEventSchemaList = [
    NewExerciseEventSchema,
    NewFoodEventSchema,
    NewMedicineEventSchema,
    NewPoopEventSchema,
    NewSimpleEventSchema,
    NewWalkEventSchema,
    NewWeightEventSchema,
];

export const AnyNewEvent = Type.Union(AnyNewEventSchemaList, {
    title: "AnyNewEvent",
    examples: AnyNewEventSchemaList.flatMap((s) => s.examples || []),
});

const AnyEventSchemaList = [
    ExerciseEventSchema,
    FoodEventSchema,
    MedicineEventSchema,
    PoopEventSchema,
    SimpleEventSchema,
    WalkEventSchema,
    WeightEventSchema,
];

export const AnyEvent = Type.Union(AnyEventSchemaList, {
    title: "AnyEvent",
    examples: AnyEventSchemaList.flatMap((s) => s.examples || []),
});

export const AnyEventCollection = Type.Composite(
    [
        Type.Object({
            events: Type.Array(AnyEvent),
        }),
        PaginatedSchema,
    ],
    {
        title: "AnyEventCollection",
        description: "Collection of Events of any type",
        examples: [
            {
                events: AnyEvent.examples,
                pagination: {
                    page: 1,
                    pageSize: 100,
                    total: AnyEvent.examples.length,
                },
            },
        ],
    }
);
