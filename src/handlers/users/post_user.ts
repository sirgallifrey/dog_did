import { ErrorSchema } from "../../contracts/errors/error";
import { NewUserSchema, UserIdSchema } from "../../contracts/users/user";
import { Route } from "../route";
import { tags } from "./common";
import { TypedFastifyInstance } from "fastify";

export const postUser = new Route({
    url: "/users",
    method: "POST",
    schema: {
        body: NewUserSchema,
        response: {
            201: UserIdSchema,
            500: ErrorSchema,
        },
    },
    handler: async ({ body, scope }, reply) => {
        const userId = await scope.userService.createUser(body);
        reply.code(201).send(userId);
    },
});
