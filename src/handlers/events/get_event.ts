import { IdObjectSchema } from "../../contracts/common/base";
import { ErrorSchema } from "../../contracts/errors/error";
import { AnyEvent } from "../../contracts/events/events";
import { Route } from "../route";

export const getEvent = new Route({
    url: "/events/:id",
    method: "GET",
    schema: {
        operationId: "getEvent",
        summary: "Get Event",
        params: IdObjectSchema,
        response: {
            201: AnyEvent,
            404: ErrorSchema,
        },
    },
    handler: async ({ params: { id }, scope }, reply) => {
        // TODO: check permission
        //scope.authClaims!.userId
        const result = await scope.eventService.getEvent(id);

        if (!result) {
            return reply.code(404).send({
                message: "Event not found",
            });
        }
        return reply.code(201).send(result);
    },
});
