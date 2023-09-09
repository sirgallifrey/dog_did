import { ErrorSchema } from "../../contracts/errors/error";
import { AnyEventCollection } from "../../contracts/events/events";
import { EventFiltersSchema } from "../../contracts/events/filters";
import { Route } from "../route";

export const getEvents = new Route({
    url: "/events",
    method: "GET",
    schema: {
        operationId: "getEvents",
        summary: "Get Events",
        querystring: EventFiltersSchema,
        response: {
            201: AnyEventCollection,
            404: ErrorSchema,
        },
    },
    handler: async ({ query, scope }, reply) => {
        // destructuring to make sure we are not passing any extra query parameters
        const { type, petId, fromDate, toDate } = query;
        // TODO: check permission
        //scope.authClaims!.userId

        const result = await scope.eventService.findEvents({ type, petId, fromDate, toDate });
        return reply.code(201).send({
            events: result,
            // TODO: events will grow a lot, so this kind of pagination wont be performant
            // TODO: also, actually implement pagination
            pagination: {
                total: 0,
                page: 1,
                pageSize: 0,
            },
        });
    },
});
