import { ExerciseEventData, NewExerciseEventData } from "./exercise_event";
import { FoodEventData, NewFoodEventData } from "./food_event";
import { MedicineEventData, NewMedicineEventData } from "./medicine_event";
import { NewPoopEventData, PoopEventData } from "./poop_event";
import { NewSimpleEventData, SimpleEventData } from "./simple_event";
import { NewWalkEventData, WalkEventData } from "./walk_event";
import { NewWeightEventData, WeightEventData } from "./weight_event";

export type NewEvent =
    | NewExerciseEventData
    | NewFoodEventData
    | NewMedicineEventData
    | NewPoopEventData
    | NewSimpleEventData
    | NewWalkEventData
    | NewWeightEventData;
export type Event =
    | ExerciseEventData
    | FoodEventData
    | MedicineEventData
    | PoopEventData
    | SimpleEventData
    | WalkEventData
    | WeightEventData;
