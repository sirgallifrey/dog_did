import { FastifyInstance } from "fastify";
import { buildJsonSchemas, register } from "fastify-zod";
import { ContractSchemas } from "../contracts";

export async function setupZod(instance: FastifyInstance) {
    return await register(instance, {
        jsonSchemas: buildJsonSchemas(ContractSchemas, { target: "openApi3" }),
        swaggerOptions: {
            openapi: {
                info: {
                    title: "Dog Did",
                    description: "dogs!!!!",
                    version: "0.1.0",
                },
            },
            // See https://github.com/fastify/fastify-swagger
        },
        swaggerUiOptions: {
            routePrefix: "/documentation",
            uiConfig: {
                deepLinking: false,
                docExpansion: "list",
                syntaxHighlight: {
                    activate: true,
                    theme: "monokai",
                },
            },
        },
    });
}
