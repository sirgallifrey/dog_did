import { IdObjectSchema } from "../../contracts/common/base";
import { AnyNewEvent } from "../../contracts/events/events";
import { Route } from "../route";

export const postEvent = new Route({
    url: "/events",
    method: "POST",
    schema: {
        operationId: "createNewEvent",
        summary: "Create new Event",
        body: AnyNewEvent,
        response: {
            201: IdObjectSchema,
        },
    },
    handler: async ({ body: event, scope }, reply) => {
        // get dog pack and membership
        // check membership in the pack
        const result = await scope.eventService.createEvent({
            ...event,
            createdBy: scope.authClaims!.userId,
        });
        reply.code(201).send(result);
    },
});
