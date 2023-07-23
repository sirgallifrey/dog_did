import { PackService } from "../services/pack_service";
import { TypedFastifyInstance } from "./instance";
export interface PacksHandlersDependencies {
    packService: PackService;
}

const tags = ["Packs"];

export function setupPackHandlers(fastify: TypedFastifyInstance, dependencies: PacksHandlersDependencies) {
    fastify.post(
        "/packs",
        {
            tags,
            operationId: "createNewPack",
            summary: "Create new Pack",
            body: "NewPackSchema",
            response: {
                201: "EmptySchema",
            },
        },
        async ({ body: packPayload }, reply) => {
            try {
                const { pets, ...pack } = packPayload;
                await dependencies.packService.createPack(pack, "opb5g0ttvoovydzkkiy4ce6vd8", pets);
                reply.code(201).send();
            } catch (err) {
                // TODO: better error handling
                reply.code(500);
            }
        }
    );

    fastify.get(
        "/packs",
        {
            tags,
            operationId: "getPacks",
            summary: "Get User Packs",
            response: {
                200: "PackCollectionSchema",
            },
        },
        async (request, reply) => {
            try {
                // TODO: get user id from auth
                const packs = await dependencies.packService.getUserPacks("opb5g0ttvoovydzkkiy4ce6vd8");
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

    fastify.get(
        "/packs/:id",
        {
            tags,
            operationId: "getPack",
            summary: "Get Pack",
            params: "GetPackParamsSchema",
            response: {
                200: "PackSchema",
                404: "PackNotFoundErrorSchema",
            },
        },
        async ({ params }, reply) => {
            try {
                const pack = await dependencies.packService.getPack(params.id);
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
        }
    );

    fastify.get(
        "/packs/:id/pets",
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
        async ({ params }, reply) => {
            try {
                const pets = await dependencies.packService.getPackPets(params.id);

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
}
