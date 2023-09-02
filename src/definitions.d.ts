import { FastifyZod, FastifyZodInstance } from "fastify-zod/build/FastifyZod";
import { Container } from "./container";
import { ContractSchemas } from "./contracts";
import { AwilixContainer } from "awilix";

declare module "fastify" {
    export type ZodFastifyInstance = FastifyZodInstance<typeof ContractSchemas>;
    export type TypedFastifyInstance = FastifyZod<typeof ContractSchemas>;
    export interface FastifyRequest {
        scope: Container;
        scopeRegister: AwilixContainer<Container>["register"];
    }
}
