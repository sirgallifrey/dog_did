import { Type } from "@sinclair/typebox";

/**
 * User params
 */
export const UserIdSchema = Type.Object(
    {
        id: Type.String(),
    },
    { description: "User Id" }
);

/**
 * User params
 */
export const GetUserParamsSchema = Type.Composite([UserIdSchema], { description: "Get user params" });

/**
 * User data
 */
export const UserSchema = Type.Composite(
    [
        UserIdSchema,
        Type.Object({
            name: Type.String(),
            email: Type.String({
                format: "email",
            }),
            createdAt: Type.String({
                format: "date-type",
            }),
        }),
    ],
    { description: "User data" }
);

/**
 * New user being created
 */
export const NewUserSchema = Type.Object(
    {
        name: Type.String(),
        email: Type.String({
            format: "email",
        }),
        password: Type.String({
            minLength: 8,
        }),
    },
    { description: "New user message" }
);

/**
 * User data For editing.
 */
export const EditUserSchema = Type.Composite([NewUserSchema], {
    description: "Edit user Message",
});

/**
 * User data as seen by other users.
 */
export const PublicUserSchema = Type.Composite(
    [
        UserIdSchema,
        Type.Object({
            name: Type.String(),
        }),
    ],
    { description: "User data as seen by other users" }
);
