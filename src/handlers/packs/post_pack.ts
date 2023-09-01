import { Route } from "../instance";
import { tags } from "./common";

export const postPack = new Route();

postPack.post(
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
    async ({ body: packPayload, scope }, reply) => {
        try {
            const { pets, ...pack } = packPayload;
            await scope.packService.createPack(pack, "opb5g0ttvoovydzkkiy4ce6vd8", pets);
            reply.code(201).send();
        } catch (err) {
            // TODO: better error handling
            reply.code(500);
        }
    }
);
