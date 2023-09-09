import { EmptySchema, IdObjectSchema } from "../../contracts/common/base";
import { ErrorSchema } from "../../contracts/errors/error";
import { Route } from "../route";

export const deleteEvent = new Route({
    url: "/events/:id",
    method: "DELETE",
    schema: {
        operationId: "deleteEvent",
        summary: "Delete Event",
        params: IdObjectSchema,
        response: {
            200: EmptySchema,
            404: ErrorSchema,
        },
    },
    handler: async ({ params: { id }, scope }, reply) => {
        // TODO: check permission
        //scope.authClaims!.userId
        await scope.eventService.deleteEvent(id);

        return reply.code(200).send();
    },
});
