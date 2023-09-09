import { Id } from "../common/id";
import { BaseNewEventData, baseFromRawEvent, baseToRawEvent } from "./base_event";
import { EventTypes } from "./event_type";
import { RawEvent, UpsertRawEvent } from "./raw_event";

export interface NewMedicineEventData extends Omit<BaseNewEventData, "type"> {
    type: typeof EventTypes.MEDICINE;
    quantity: number;
    medicineName?: string;
}

export interface MedicineEventData extends NewMedicineEventData, Id {}

export function foodToRawEvent(data: NewMedicineEventData | MedicineEventData): UpsertRawEvent {
    const result = baseToRawEvent(data);
    result.number = data.quantity;
    result.string = data.medicineName;
    return result;
}

export function foodFromRawEvent(data: RawEvent): MedicineEventData {
    const result = baseFromRawEvent(data) as MedicineEventData;
    result.quantity = data.number || 0;
    result.medicineName = data.string ?? undefined;
    return result;
}
