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
    {
        description: "New Medicine Event data",
        title: "NewMedicineEvent",
        examples: [
            {
                petId: "pb72whtdpn8drvktvwaf0dvfky",
                type: "medicine",
                medicineName: "condotril",
                quantity: 1,
                date: "2023-02-10T10:13:21Z",
                comments: "Had to mix with sausage so they would eat",
            },
        ],
    }
);

/**
 * Medicine Event
 */
export const MedicineEventSchema = Type.Composite([IdObjectSchema, CreatedBySchema, NewMedicineEventSchema], {
    description: "Medicine Event data",
    title: "MedicineEvent",
    examples: NewMedicineEventSchema.examples!.map((e) => ({
        id: "j7nrfb2m1s2z7dg0ucxq1kc466",
        cleatedBy: "wpmgfffsv73wftje84x4smaupe",
        ...e,
    })),
});
