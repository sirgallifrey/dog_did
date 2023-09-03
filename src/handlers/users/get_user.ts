import { GetUserParamsSchema, UserSchema } from "../../contracts/users/user";
import { UserNotFoundErrorSchema } from "../../contracts/users/user_errors";
import { Route } from "../route";
import { tags } from "./common";

export const getUser = new Route({
    url: "/users/:id",
    method: "GET",
    schema: {
        tags,
        operationId: "getUser",
        summary: "Get user",
        params: GetUserParamsSchema,
        response: {
            200: UserSchema,
            404: UserNotFoundErrorSchema,
        },
    },
    handler: async ({ params, scope }, reply) => {
        try {
            const user = await scope.userService.getUser(params.id);
            if (!user) {
                return reply.code(404).send({
                    message: "User not found",
                });
            }
            reply.code(200).send(user);
        } catch (err) {
            // TODO: better error handling
            reply.code(500);
        }
    },
});
