import { z } from "zod";

/**
 * Login payload
 */
export const LoginSchema = z
    .object({
        email: z.string(),
        password: z.string(),
    })
    .describe("Login payload");

/**
 * Token Response
 */
export const TokenResponseSchema = z
    .object({
        token: z.string(),
    })
    .describe("Response from a successful login attempt");
