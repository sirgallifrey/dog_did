import { Type } from "@sinclair/typebox";

/**
 * Login payload
 */
export const LoginSchema = Type.Object(
    {
        email: Type.String(),
        password: Type.String(),
    },
    { description: "Login payload" }
);

/**
 * Token Response
 */
export const TokenResponseSchema = Type.Object(
    {
        token: Type.String(),
    },
    { description: "Response from a successful login attempt" }
);
