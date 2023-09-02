import { FastifyPluginCallback, FastifyPluginOptions, ZodFastifyInstance } from "fastify";
import { setupAuthPreHandler } from "../handlers/auth/auth_check";
import { registerPublicRoutes, registerRoutes } from "../handlers/routes";

const authProtectedRoutes = async (instance: ZodFastifyInstance) => {
    // checking auth here not working because of how fastify-zod is implemented
    // setupAuthPreHandler(instance);

    registerRoutes(instance.zod);
};

const publicRoutes = async (instance: ZodFastifyInstance, opts: unknown) => {
    registerPublicRoutes(instance.zod);
};

export const setupRoutes = (instance: ZodFastifyInstance) => {
    instance.register(authProtectedRoutes, {
        // prefix not working because of how fastify-zod is implemented
        // prefix: "/api",
    });

    //registerPublicRoutes(instance.zod);

    instance.register(publicRoutes, {
        // prefix not working because of how fastify-zod is implemented
        // prefix: "/api",
    });
};
