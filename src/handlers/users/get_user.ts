import { Route } from "../instance";
import { tags } from "./common";

export const getUser = new Route();

getUser.get(
    "/users/:id",
    {
        tags,
        operationId: "getUser",
        summary: "Get user",
        params: "GetUserParamsSchema",
        response: {
            200: "UserSchema",
            404: "UserNotFoundErrorSchema",
        },
    },
    async ({ params, scope }, reply) => {
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
    }
);
