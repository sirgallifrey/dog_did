import { AwilixContainer } from "awilix";
import { FastifyRequest } from "fastify";
import { Container } from "./container";

declare module "fastify" {
    export interface FastifyRequest {
        scope: Container;
    }
}
