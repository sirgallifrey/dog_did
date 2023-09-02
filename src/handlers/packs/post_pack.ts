import { Route } from "../route";
import { tags } from "./common";

export const postPack = new Route();

postPack.post(
    "/api/packs",
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
            await scope.packService.createPack(pack, scope.authClaims!.userId, pets);
            reply.code(201).send();
        } catch (err) {
            // TODO: better error handling
            reply.code(500);
        }
    }
);
