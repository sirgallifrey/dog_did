import { FastifyInstance } from "fastify";
import { setupMysqlConnection } from "./mysql_connection";
import { integrateContainer, registerContainer } from "./container_registrations";
import { setupSwagger } from "./swagger";
import { publicRoutes, protectedRoutes } from "../handlers/routes";

export async function setup(instance: FastifyInstance) {
    await setupMysqlConnection(instance);
    const container = registerContainer(instance);
    integrateContainer(instance, container);
    setupSwagger(instance);
    instance.register(publicRoutes, { prefix: "/api" });
    instance.register(protectedRoutes, { prefix: "/api" });
}
