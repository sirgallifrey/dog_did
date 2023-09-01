import { FastifyInstance } from "fastify";
import { setupZod } from "./zod";
import { setupMysqlConnection } from "./mysql_connection";
import { register } from "./container_registrations";
import { registerRoutes } from "../handlers/routes";

export async function setup(instance: FastifyInstance) {
    await setupMysqlConnection(instance);
    register(instance);
    const typedInstance = await setupZod(instance);
    registerRoutes(typedInstance.zod);
}
