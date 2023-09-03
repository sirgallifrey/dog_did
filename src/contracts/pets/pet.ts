import { Type } from "@sinclair/typebox";
import { PaginatedSchema } from "../common/pagination";
import { OptNull } from "../common/contract_helpers";

/**
 * Pet Data
 */
export const PetSchema = Type.Object(
    {
        id: Type.String(),
        name: Type.String(),
        breed: OptNull(Type.String()),
        color: OptNull(Type.String()),
        birthDate: OptNull(Type.String({ format: "date-time" })),
        createdAt: Type.String({ format: "date-time" }),
    },
    { description: "Pet data" }
);

/**
 * Create new Pet
 */
export const NewPetSchema = Type.Object(
    {
        name: Type.String(),
        breed: OptNull(Type.String()),
        color: OptNull(Type.String()),
        birthDate: OptNull(Type.String({ format: "date-time" })),
    },
    { description: "New Pet data" }
);

export const PetCollection = Type.Composite(
    [
        PaginatedSchema,
        Type.Object({
            pets: Type.Array(PetSchema),
        }),
    ],
    { description: "Paginated Collection of Pets" }
);
