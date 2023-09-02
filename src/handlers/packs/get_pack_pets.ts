import { Route } from "../route";
import { tags } from "./common";

export const getPackPets = new Route();

getPackPets.get(
    "/api/packs/:id/pets",
    {
        tags,
        operationId: "getPackPets",
        summary: "Get Pack Pets",
        params: "GetPackParamsSchema",
        response: {
            200: "PackSchema",
            404: "PackNotFoundErrorSchema",
        },
    },
    async ({ params, scope }, reply) => {
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
    }
);
