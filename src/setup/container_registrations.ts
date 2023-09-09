import { AwilixContainer, asClass, asValue, createContainer } from "awilix";
import { FastifyInstance } from "fastify";
import { getDB } from "../infrastructure/query_builder";
import { UserServiceImpl } from "../services/user_service_impl";
import { UserRepositoryImpl } from "../repositories/user_repository_impl";
import { PackRepositoryImpl } from "../repositories/pack_repository_impl";
import { PackServiceImpl } from "../services/pack_service_impl";
import { Container } from "../container";
import { AuthServiceImpl } from "../services/auth_service_impl";
import { EventServiceImpl } from "../services/event_service_impl";
import { EventRepositoryImpl } from "../repositories/event_repository_impl";

export function registerContainer(instance: FastifyInstance) {
    const container = createContainer<Container>({
        injectionMode: "CLASSIC",
    });
    container.register("authService", asClass(AuthServiceImpl));
    container.register("db", asValue(getDB()));
    container.register("eventRepository", asClass(EventRepositoryImpl));
    container.register("eventService", asClass(EventServiceImpl));
    container.register("logger", asValue(instance.log));
    container.register("packRepository", asClass(PackRepositoryImpl));
    container.register("packService", asClass(PackServiceImpl));
    container.register("userRepository", asClass(UserRepositoryImpl));
    container.register("userService", asClass(UserServiceImpl));
    return container;
}

export function integrateContainer(instance: FastifyInstance, container: AwilixContainer<Container>) {
    instance.addHook("preHandler", (request, reply, done) => {
        const scope = container.createScope();
        request.scope = scope.cradle;
        request.scopeRegister = scope.register;
        done();
    });
}
