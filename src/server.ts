import "dotenv/config";
import Fastify from "fastify";
import { setup } from "./setup/setup";

const fastify = Fastify({
    logger: {
        enabled: true,
        // TODO: only for localhost
        level: "debug",
        // TODO: only for localhost
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true,
            },
        },
    },
});

const start = async () => {
    try {
        await setup(fastify);
        const address = await fastify.listen({ port: 3000 });
        fastify.log.info(`Documentation at ${address}/docs`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
