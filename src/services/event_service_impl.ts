import { Id } from "../domain/common/id";
import { NewEvent, Event } from "../domain/events/event";
import { fromRawEvent, toRawEvent } from "../domain/events/factory";
import { createId } from "../infrastructure/cuid";
import { toDateTime } from "../infrastructure/time";
import { DB, Selectable } from "../infrastructure/types";
import { RawEvent } from "../domain/events/raw_event";
import { EventFilters } from "../domain/events/filters";
import { EventRepository } from "../repositories/event_repository";
import { EventService } from "./event_service";
import { LoggerService } from "./log_service";

export class EventServiceImpl implements EventService {
    constructor(private readonly logger: LoggerService, private readonly eventRepository: EventRepository) {}

    async createEvent(event: NewEvent): Promise<Id> {
        this.logger.debug({ event }, "Create Event Init");
        const result = await this.eventRepository.createEvent(event);
        this.logger.info(result, "Create Event success");
        return result;
    }

    async findEvents(filters: EventFilters): Promise<Event[]> {
        this.logger.debug({ filters }, "List Events init");
        // TODO: remove deleted pets from filter;
        const result = await this.eventRepository.findEvents(filters);
        this.logger.info({ filters, numberOfEvents: result.length }, "List Events success");
        return result;
    }
    async getEvent(id: string): Promise<Event | null> {
        this.logger.debug({ id }, "Get Event init");
        const result = await this.eventRepository.getEvent(id);
        this.logger.info(result, "Get Event success");
        return result;
    }

    async deleteEvent(id: string): Promise<void> {
        this.logger.debug({ id }, "Delete Event init");
        await this.eventRepository.deleteEvent(id);
        this.logger.info("Delete Event success");
    }
}
