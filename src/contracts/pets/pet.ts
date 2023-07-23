import { z } from "zod";
import { PaginatedSchema } from "../common/pagination";

/**
 * Pet Data
 */
export const PetSchema = z
    .object({
        id: z.string(),
        name: z.string(),
        breed: z.string().nullable(),
        color: z.string().nullable(),
        birthDate: z.string().datetime().nullable(),
        createdAt: z.string().datetime(),
    })
    .describe("Pet data");

/**
 * Create new Pet
 */
export const NewPetSchema = z
    .object({
        name: z.string(),
        breed: z.string().nullable(),
        color: z.string().nullable(),
        birthDate: z.string().datetime().nullable(),
    })
    .describe("New Pet data");

export const PetCollection = PaginatedSchema.extend({
    pets: z.array(PetSchema),
}).describe("Paginated Collection of Pets");
