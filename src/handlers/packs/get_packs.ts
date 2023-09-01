import { Route } from "../instance";
import { tags } from "./common";

export const getPacks = new Route();

getPacks.get(
    "/packs",
    {
        tags,
        operationId: "getPacks",
        summary: "Get User Packs",
        response: {
            200: "PackCollectionSchema",
        },
    },
    async ({ scope }, reply) => {
        try {
            // TODO: get user id from auth
            const packs = await scope.packService.getUserPacks("opb5g0ttvoovydzkkiy4ce6vd8");
            reply.code(200).send({
                packs,
                // TODO: implement pagination
                pagination: {
                    page: 1,
                    pageSize: 0,
                    total: 0,
                },
            });
        } catch (err) {
            // TODO: better error handling
            reply.code(500);
        }
    }
);
