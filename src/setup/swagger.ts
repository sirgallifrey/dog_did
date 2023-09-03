import { FastifyInstance } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { ContractSchemas } from "../contracts";

export async function setupSwagger(instance: FastifyInstance) {
    Object.keys(ContractSchemas)
        .sort()
        .forEach((schema) => {
            instance.addSchema(ContractSchemas[schema]);
        });

    instance.register(fastifySwagger, {
        openapi: {
            info: {
                title: "Dog Did",
                description: "dogs!!!!",
                version: "0.1.0",
            },
            components: {
                securitySchemes: {
                    bearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT",
                    },
                },
            },
        },
    });

    instance.register(fastifySwaggerUi, {
        routePrefix: "/docs",
        uiConfig: {
            deepLinking: false,
            docExpansion: "list",
            syntaxHighlight: {
                activate: true,
                theme: "monokai",
            },
        },
        staticCSP: true,
    });
}
