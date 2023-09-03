import { asValue } from "awilix";
import { FastifyInstance } from "fastify";

export const setupAuthPreHandler = (f: FastifyInstance) => {
    f.addHook("preHandler", async ({ headers, scope, scopeRegister }, reply) => {
        const authHeader = headers.authorization;
        const token = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

        if (!token) {
            return reply.code(401).send({ message: "User not authenticated. Auth token is missing." });
        }

        try {
            const claims = scope.authService.validateAndParseToken(token);
            scopeRegister("authClaims", asValue(claims));
        } catch (error) {
            scope.logger.error(
                {
                    error,
                },
                "Token validation error"
            );
            return reply.code(403).send();
        }
    });
};
