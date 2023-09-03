import { LoginSchema, TokenResponseSchema } from "../../contracts/auth/login";
import { ErrorSchema } from "../../contracts/errors/error";
import { Route } from "../route";

export const login = new Route({
    url: "/auth/login",
    method: "POST",
    schema: {
        tags: ["Auth"],
        operationId: "Login",
        summary: "Get Bearer token",
        body: LoginSchema,
        response: {
            200: TokenResponseSchema,
            401: ErrorSchema,
        },
    },
    handler: async ({ body, scope }, reply) => {
        const replyError = () => {
            reply.code(401).send({ message: "Email or Password invalid." });
        };

        const user = await scope.userService.getUserByEmail(body.email);

        if (!user) {
            return replyError();
        }

        const validated = await scope.authService.verifyPassword(body.password, user.passwordHash);

        if (!validated) {
            return replyError();
        }

        const token = scope.authService.createToken({
            userId: user.id,
            userEmail: user.email,
            userName: user.name,
        });

        reply.code(200).send({ token });
    },
});
