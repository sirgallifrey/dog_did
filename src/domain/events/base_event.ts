import { Id } from "../common/id";
import { EventType } from "./event_type";
import { RawEvent, UpsertRawEvent } from "./raw_event";

export interface BaseNewEventData {
    petId: string;
    createdBy: string;
    date: string;
    type: EventType;
    comments?: string;
}

export interface BaseEventData extends BaseNewEventData, Id {}

export function baseToRawEvent(data: BaseNewEventData | BaseEventData): UpsertRawEvent {
    const { petId, createdBy, date, type, comments } = data;
    const result: UpsertRawEvent = {
        petId,
        createdBy,
        date,
        type,
        duration: null,
        number: null,
        string: null,
        comments: comments || null,
        id: "id" in data ? data.id : undefined,
    };

    return result;
}

export function baseFromRawEvent(data: RawEvent): BaseEventData {
    const { id, petId, createdBy, date, type, comments } = data;
    return {
        id,
        petId,
        createdBy,
        date,
        type,
        comments: comments || undefined,
    };
}
