import { z } from "zod";

/**
 * User params
 */
export const UserIdSchema = z
    .object({
        id: z.string(),
    })
    .describe("User Id");

/**
 * User params
 */
export const GetUserParamsSchema = UserIdSchema.extend({}).describe("Get user params");

/**
 * User data
 */
export const UserSchema = UserIdSchema.extend({
    name: z.string(),
    email: z.string().email(),
    createdAt: z.string().datetime(),
}).describe("User data");

/**
 * New user being created
 */
export const NewUserSchema = z
    .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8, "Password cannot be shorter than 8 characters"),
    })
    .describe("New user message");

/**
 * User data For editing.
 */
export const EditUserSchema = NewUserSchema.extend({}).describe("Edit user Message");

/**
 * User data as seen by other users.
 */
export const PublicUserSchema = UserIdSchema.extend({
    name: z.string(),
}).describe("User data as seen by other users");
