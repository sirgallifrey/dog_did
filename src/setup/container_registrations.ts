import { FastifyInstance } from "fastify";
import { getDB } from "../infrastructure/query_builder";
import { UserServiceImpl } from "../services/user_service_impl";
import { UserRepositoryImpl } from "../repositories/user_repository_impl";
import { PackRepositoryImpl } from "../repositories/pack_repository_impl";
import { PackServiceImpl } from "../services/pack_service_impl";
import { AwilixContainer, asClass, asValue, createContainer } from "awilix";
import { Container } from "../container";

export function register(instance: FastifyInstance) {
    const container = createContainer<Container>();
    container.register("db", asValue(getDB()));
    container.register("logger", asValue(instance.log));
    container.register("userRepository", asClass(UserRepositoryImpl));
    container.register("userService", asClass(UserServiceImpl));
    container.register("packRepository", asClass(PackRepositoryImpl));
    container.register("packService", asClass(PackServiceImpl));
    return container;
}

export function integrateContainer(instance: FastifyInstance, container: AwilixContainer<Container>) {
    instance.decorateRequest("scope", container.createScope().cradle);

    instance.addHook("preHandler", (request, reply, done) => {
        request.scope = container.createScope().cradle;
        done();
    });
}
