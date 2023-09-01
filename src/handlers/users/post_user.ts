import { Route } from "../instance";
import { tags } from "./common";

export const postUser = new Route();

postUser.post(
    "/users",
    {
        tags,
        operationId: "createNewUser",
        summary: "Create new user",
        body: "NewUserSchema",
        response: {
            201: "UserIdSchema",
        },
    },
    async ({ body: newUser, scope }, reply) => {
        try {
            const userId = await scope.userService.createUser(newUser);
            reply.code(201).send(userId);
        } catch (err) {
            // TODO: better error handling
            reply.code(500);
        }
    }
);
