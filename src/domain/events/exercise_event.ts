import { Id } from "../common/id";
import { BaseNewEventData, baseFromRawEvent, baseToRawEvent } from "./base_event";
import { EventTypes } from "./event_type";
import { RawEvent, UpsertRawEvent } from "./raw_event";

export interface NewExerciseEventData extends Omit<BaseNewEventData, "type"> {
    type: typeof EventTypes.EXERCISE;
    /**
     * Duration in minutes
     */
    duration: number;
    activity?: string;
}

export interface ExerciseEventData extends NewExerciseEventData, Id {}

export function foodToRawEvent(data: NewExerciseEventData | ExerciseEventData): UpsertRawEvent {
    const result = baseToRawEvent(data);
    result.duration = data.duration;
    result.string = data.activity;
    return result;
}

export function foodFromRawEvent(data: RawEvent): ExerciseEventData {
    const result = baseFromRawEvent(data) as ExerciseEventData;
    result.duration = data.duration || 0;
    result.activity = data.string ?? undefined;
    return result;
}
