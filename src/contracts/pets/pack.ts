import { Type } from "@sinclair/typebox";
import { NewPetSchema } from "./pet";
import { PaginatedSchema } from "../common/pagination";

enum PackMemberRoleEnum {
    owner = "owner",
    admin = "admin",
    member = "member",
}

export const PackMemberRole = Type.Enum(PackMemberRoleEnum);

export const PackMemberSchema = Type.Object({
    userId: Type.String({ minLength: 1 }),
    role: PackMemberRole,
});

/**
 * Pack params
 */
export const PackIdSchema = Type.Object(
    {
        id: Type.String(),
    },
    { description: "Pack Id" }
);

/**
 * Get Pack params
 */
export const GetPackParamsSchema = Type.Composite([PackIdSchema], { description: "Get Pack params" });

/**
 * Pack Data
 */
export const PackSchema = Type.Composite(
    [
        PackIdSchema,
        Type.Object({
            name: Type.String(),
        }),
    ],
    { description: "Pack data" }
);

/**
 * New Pack being created
 */
export const NewPackSchema = Type.Object(
    {
        name: Type.String(),
        pets: Type.Array(NewPetSchema),
    },
    { description: "New Pack message" }
);

/**
 * Subject data For editing.
 */
export const EditPackSchema = Type.Composite([NewPackSchema], {
    description: "Edit Pack message",
});

/**
 * Pack data as seen by other users.
 */
export const PublicPackSchema = Type.Object(
    {
        id: Type.String(),
        name: Type.String(),
    },
    { description: "Pack data as seen by non member users" }
);

export const PackCollectionSchema = Type.Composite(
    [
        PaginatedSchema,
        Type.Object({
            packs: Type.Array(PackSchema),
        }),
    ],
    { description: "Paginated Pack collection" }
);
