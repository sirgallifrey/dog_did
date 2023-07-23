export interface EventId {
    id: string;
}

export enum EventType {
    exercise = "exercise",
    food = "food",
    medicine = "medicine",
    other = "other",
    pee = "pee",
    play = "play",
    poop = "poop",
    walk = "walk",
    water = "water",
    weight = "weight",
}

export interface RawEvent extends EventId {
    petId: string;
    createdBy: string;
    date: string;
    type: EventType;
    number: number | null;
    string: string | null;
    duration: number | null;
}

export type UpsertRawEvent = RawEvent | Omit<RawEvent, "id">;

export interface BaseNewEventData {
    petId: string;
    createdBy: string;
    date: string;
    type: EventType;
}

export interface BaseEventData extends BaseNewEventData, EventId {}

export interface FoodEventData extends BaseNewEventData {}

export interface Event {
    toRawEvent(): Omit<RawEvent, "id">;
}

export function baseToRawEvent(data: BaseNewEventData | BaseEventData): UpsertRawEvent {
    const { petId, createdBy, date, type } = data;
    const result: UpsertRawEvent = {
        petId,
        createdBy,
        date,
        type,
        duration: null,
        number: null,
        string: null,
        id: "id" in data ? data.id : undefined,
    };

    return result;
}

export function baseFromRawEvent(data: RawEvent): BaseEventData {
    const { id, petId, createdBy, date, type } = data;
    return {
        id,
        petId,
        createdBy,
        date,
        type,
    };
}
