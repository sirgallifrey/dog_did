import { UserService } from "../services/user_service";
import { TypedFastifyInstance } from "./instance";
export interface UserHandlersDependencies {
    userService: UserService
}

const tags = ["Users"];

export function setupUserHandlers(fastify: TypedFastifyInstance, dependencies: UserHandlersDependencies) {

    fastify.post("/users", {
        tags, 
        operationId: "createNewUser",
        summary: "Create new user",
        body: "NewUserSchema",
        response: {
            201: 'UserIdSchema'
        }
    }, async ({ body: newUser }, reply) => {
        try {
            const userId = await dependencies.userService.createUser(newUser);
            reply.code(201).send(userId);
        } catch (err) {
            // TODO: better error handling
            reply.code(500);
        }
    });

    fastify.get("/users/:id", {
        tags, 
        operationId: "getUser",
        summary: "Get user",
        params: 'GetUserParamsSchema',
        response: {
            200: "UserSchema",
            404: "UserNotFoundErrorSchema"
        }
    }, async ({ params }, reply) => {
        try {
            const user = await dependencies.userService.getUser(params.id);
            if (!user) {
                return reply.code(404).send({
                    message: "User not found"
                });
            }
            reply.code(200).send(user);
        } catch (err) {
            // TODO: better error handling
            reply.code(500);
        }
    });
}
