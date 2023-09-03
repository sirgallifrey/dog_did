import { GetPackParamsSchema, PackSchema } from "../../contracts/pets/pack";
import { PackNotFoundErrorSchema } from "../../contracts/pets/pack_errors";
import { Route } from "../route";
import { tags } from "./common";

export const getPack = new Route({
    url: "/packs/:id",
    method: "GET",
    schema: {
        tags,
        operationId: "getPack",
        summary: "Get Pack",
        params: GetPackParamsSchema,
        response: {
            200: PackSchema,
            404: PackNotFoundErrorSchema,
        },
    },
    handler: async ({ params, scope }, reply) => {
        try {
            const pack = await scope.packService.getPack(params.id);
            if (!pack) {
                return reply.code(404).send({
                    message: "Pack not found",
                });
            }
            reply.code(200).send(pack);
        } catch (err) {
            // TODO: better error handling
            reply.code(500);
        }
    },
});
