import { GetPackParamsSchema } from "../../contracts/pets/pack";
import { PackNotFoundErrorSchema } from "../../contracts/pets/pack_errors";
import { PetCollection } from "../../contracts/pets/pet";
import { Route } from "../route";
import { tags } from "./common";

export const getPackPets = new Route({
    url: "/packs/:id/pets",
    method: "GET",
    schema: {
        tags,
        operationId: "getPackPets",
        summary: "Get Pack Pets",
        params: GetPackParamsSchema,
        response: {
            200: PetCollection,
            404: PackNotFoundErrorSchema,
        },
    },
    handler: async ({ params, scope }, reply) => {
        try {
            const pets = await scope.packService.getPackPets(params.id);

            reply.code(200).send({
                pets,
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
