import { Id } from "../domain/common/id";
import { NewEvent, Event } from "../domain/events/event";
import { EventFilters } from "../domain/events/filters";

export interface EventService {
    createEvent(event: NewEvent): Promise<Id>;
    findEvents(filters: EventFilters): Promise<Event[]>;
    getEvent(id: string): Promise<Event | null>;

    deleteEvent(id: string): Promise<void>;
}
