import { packRoutes } from "./packs/routes";
import { userPublicRoutes, userRoutes } from "./users/routes";
import { authPublicRoutes } from "./auth/routes";
import { createFastifyPlugin } from "../infrastructure/fastify_plugin";
import { setupAuthPreHandler } from "./auth/auth_check";
import { eventsRoutes } from "./events/routes";

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
    eventsRoutes.override(opts);
    userRoutes.apply(instance);
    packRoutes.apply(instance);
    eventsRoutes.apply(instance);
});
