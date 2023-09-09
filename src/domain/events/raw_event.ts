import { Id } from "../common/id";
import { EventType } from "./event_type";

export type UpsertRawEvent = RawEvent | Omit<RawEvent, "id">;

export interface RawEvent extends Id {
    petId: string;
    createdBy: string;
    date: string;
    type: EventType;
    number?: number | null;
    string?: string | null;
    /**
     * Duration in minutes
     */
    duration?: number | null;
    comments?: string | null;
}
