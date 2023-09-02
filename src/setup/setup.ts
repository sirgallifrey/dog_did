import { FastifyInstance } from "fastify";
import { setupZod } from "./zod";
import { setupMysqlConnection } from "./mysql_connection";
import { integrateContainer, registerContainer } from "./container_registrations";
import { setupRoutes } from "./routes";
import { setupAuthPreHandler } from "../handlers/auth/auth_check";

export async function setup(instance: FastifyInstance) {
    await setupMysqlConnection(instance);
    const container = registerContainer(instance);
    integrateContainer(instance, container);
    // setting up auth preHandler at this level to workaround fastify-zod limitations
    setupAuthPreHandler(instance);
    const typedInstance = await setupZod(instance);
    setupRoutes(typedInstance);
}
