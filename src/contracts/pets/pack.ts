import { z } from "zod";
import { NewPetSchema } from "./pet";
import { PaginatedSchema } from "../common/pagination";

export const PackMemberRole = z.enum(["owner", "admin", "member"]);

export const PackMemberSchema = z.object({
    userId: z.string().min(1),
    role: PackMemberRole,
});

/**
 * Pack params
 */
export const PackIdSchema = z
    .object({
        id: z.string(),
    })
    .describe("Pack Id");

/**
 * Get Pack params
 */
export const GetPackParamsSchema = PackIdSchema.extend({}).describe("Get Pack params");

/**
 * Pack Data
 */
export const PackSchema = PackIdSchema.extend({
    name: z.string(),
}).describe("Pack data");

/**
 * New Pack being created
 */
export const NewPackSchema = z
    .object({
        name: z.string(),
        pets: z.array(NewPetSchema),
    })
    .describe("New Pack message");

/**
 * Subject data For editing.
 */
export const EditPackSchema = NewPackSchema.extend({}).describe("Edit Pack message");

/**
 * Pack data as seen by other users.
 */
export const PublicPackSchema = z
    .object({
        id: z.string(),
        name: z.string(),
    })
    .describe("Pack data as seen by non member users");

export const PackCollectionSchema = PaginatedSchema.extend({
    packs: z.array(PackSchema),
}).describe("Paginated Pack collection");
