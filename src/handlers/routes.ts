import { packRoutes } from "./packs/routes";
import { userPublicRoutes, userRoutes } from "./users/routes";
import { authPublicRoutes } from "./auth/routes";
import { createFastifyPlugin } from "../infrastructure/fastify_plugin";
import { setupAuthPreHandler } from "./auth/auth_check";

export const publicRoutes = createFastifyPlugin((instance) => {
    userPublicRoutes.apply(instance);
    authPublicRoutes.apply(instance);
});

export const protectedRoutes = createFastifyPlugin((instance) => {
    setupAuthPreHandler(instance);
    const opts = {
        schema: {
            security: [
                {
                    bearerAuth: ["bearerAuth"],
                },
            ],
        },
    };
    userRoutes.override(opts);
    packRoutes.override(opts);
    userRoutes.apply(instance);
    packRoutes.apply(instance);
});
