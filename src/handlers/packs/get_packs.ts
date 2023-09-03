import { PackCollectionSchema } from "../../contracts/pets/pack";
import { Route } from "../route";
import { tags } from "./common";

export const getPacks = new Route({
    url: "/packs",
    method: "GET",
    schema: {
        tags,
        operationId: "getPacks",
        summary: "Get User Packs",
        response: {
            200: PackCollectionSchema,
        },
    },
    handler: async ({ scope }, reply) => {
        try {
            const packs = await scope.packService.getUserPacks(scope.authClaims!.userId);
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
    },
});
