import { Route } from "../route";

export const login = new Route();

login.post(
    "/api/auth/login",
    {
        tags: ["Auth"],
        operationId: "Login",
        summary: "Get Bearer token",
        body: "LoginSchema",
        response: {
            200: "TokenResponseSchema",
            // TODO: Create proper error message
            401: "ErrorSchema",
        },
    },
    async ({ body, scope }, reply) => {
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
    }
);
