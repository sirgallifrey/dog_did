import { Id } from "../domain/common/id";
import { NewEvent, Event } from "../domain/events/event";
import { fromRawEvent, toRawEvent } from "../domain/events/factory";
import { createId } from "../infrastructure/cuid";
import { toDateTime } from "../infrastructure/time";
import { DB, Selectable } from "../infrastructure/types";
import { EventRepository } from "./event_repository";
import { RawEvent } from "../domain/events/raw_event";
import { EventFilters } from "../domain/events/filters";

const parseNumbers = (e: Selectable<"events">): RawEvent => ({
    ...e,
    number: e.number !== null ? parseFloat(e.number) : null,
    duration: e.duration !== null ? parseFloat(e.duration) : null,
});

const mapDBEvent = (e: Selectable<"events">): Event => fromRawEvent(parseNumbers(e));

export class EventRepositoryImpl implements EventRepository {
    constructor(private readonly db: DB) {}

    async createEvent(event: NewEvent): Promise<Id> {
        const id = createId();
        const raw = toRawEvent(event);
        await this.db
            .insertInto("events")
            .values({
                ...raw,
                id,
                date: toDateTime(raw.date),
            })
            .execute();
        return { id };
    }

    async findEvents(filters: EventFilters): Promise<Event[]> {
        // TODO: we need to limit somehow how many events we return maximum. One year should be the limit for time filter but even with that, we need some limit for amount of events.
        const query = await this.db.selectFrom("events").selectAll();

        if (filters.petId) {
            query.where("petId", "in", filters.petId);
        }

        if (filters.type) {
            query.where("type", "in", filters.type);
        }

        if (filters.fromDate) {
            query.where("date", ">=", toDateTime(filters.fromDate));
        }

        if (filters.toDate) {
            query.where("date", "<=", toDateTime(filters.toDate));
        }

        const rawResult = await query.execute();
        return rawResult.map(mapDBEvent);
    }
    async getEvent(id: string): Promise<Event | null> {
        const result = await this.db.selectFrom("events").selectAll().executeTakeFirst();
        return result ? mapDBEvent(result) : null;
    }

    async deleteEvent(id: string): Promise<void> {
        // hard delete events
        await this.db.deleteFrom("events").where("id", "=", id).execute();
    }
}
