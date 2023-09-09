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

export const AnyNewEvent = Type.Union([
    NewExerciseEventSchema,
    NewFoodEventSchema,
    NewMedicineEventSchema,
    NewPoopEventSchema,
    NewSimpleEventSchema,
    NewWalkEventSchema,
    NewWeightEventSchema,
]);

export const AnyEvent = Type.Union([
    ExerciseEventSchema,
    FoodEventSchema,
    MedicineEventSchema,
    PoopEventSchema,
    SimpleEventSchema,
    WalkEventSchema,
    WeightEventSchema,
]);

export const AnyEventCollection = Type.Composite(
    [
        Type.Object({
            events: Type.Array(AnyEvent),
        }),
        PaginatedSchema,
    ],
    { description: "Collection of Events of any type" }
);
