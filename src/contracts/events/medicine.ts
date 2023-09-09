import { Type } from "@sinclair/typebox";
import { IdObjectSchema, LiteralString } from "../common/base";
import { CreatedBySchema, EventTypes, NewBaseEventSchema } from "./base_event";

/**
 * New Medicine Event
 */
export const NewMedicineEventSchema = Type.Composite(
    [
        NewBaseEventSchema,
        Type.Object({
            type: LiteralString(EventTypes.MEDICINE),
            quantity: Type.Number(),
            medicineName: Type.Optional(Type.String()),
        }),
    ],
    { description: "New Medicine Event data", title: "NewMedicineEvent" }
);

/**
 * Medicine Event
 */
export const MedicineEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewMedicineEventSchema], {
    description: "Medicine Event data",
    title: "MedicineEvent",
});
