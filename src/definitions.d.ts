import { Container } from "./container";
import { AwilixContainer } from "awilix";

import {
    FastifyInstance,
    FastifyBaseLogger,
    RawReplyDefaultExpression,
    RawRequestDefaultExpression,
    RawServerDefault,
    RouteOptions,
} from "fastify";

import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

declare module "fastify" {
    export type TypedFastifyInstance = FastifyInstance<
        RawServerDefault,
        RawRequestDefaultExpression<RawServerDefault>,
        RawReplyDefaultExpression<RawServerDefault>,
        FastifyBaseLogger,
        TypeBoxTypeProvider
    >;
    export interface FastifyRequest {
        scope: Container;
        scopeRegister: AwilixContainer<Container>["register"];
    }
}
