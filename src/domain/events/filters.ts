import { EventType } from "./event_type";

export interface EventFilters {
    petId?: string[];
    fromDate?: string;
    toDate?: string;
    type?: EventType[];
}
