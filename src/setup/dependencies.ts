import { FastifyInstance } from "fastify";
import { getDB } from "../infrastructure/query_builder";
import { UserServiceImpl } from "../services/user_service_impl";
import { UserRepositoryImpl } from "../repositories/user_repository_impl";
import { PackRepositoryImpl } from "../repositories/pack_repository_impl";
import { PackServiceImpl } from "../services/pack_service_impl";

export type Dependencies = ReturnType<typeof setupDependencies>;

export function setupDependencies(instance: FastifyInstance) {
    const db = getDB();
    const userRepository = new UserRepositoryImpl(db);
    const userService = new UserServiceImpl(instance.log, userRepository);
    const packRepository = new PackRepositoryImpl(db);
    const packService = new PackServiceImpl(instance.log, packRepository);

    return {
        userService,
        packService,
    };
}
