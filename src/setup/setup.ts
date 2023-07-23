import { FastifyInstance } from "fastify";
import { setupZod } from "./zod";
import { setupMysqlConnection } from "./mysql_connection";
import { setupHandlers } from "./handlers";
import { setupDependencies } from "./dependencies";

export async function setup(instance: FastifyInstance) {
    await setupMysqlConnection(instance);
    const typedInstance = await setupZod(instance);
    // TODO: poor man's dependency injection.
    const dependencies = setupDependencies(instance);
    setupHandlers(typedInstance.zod, dependencies);
}
