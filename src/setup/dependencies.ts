import { FastifyInstance } from "fastify";
import { UserRepositoryMongo } from "../repositories/user_repository_mongo";
import { getDB } from "../infrastructure/mongodb";
import { UserServiceImpl } from "../services/user_service_impl";

export type Dependencies = ReturnType<typeof setupDependencies>;

export function setupDependencies(instance: FastifyInstance) {
    const db = getDB();
    const userRepository = new UserRepositoryMongo(db);
    const userService = new UserServiceImpl(instance.log, userRepository);

    return {
        userService
    }
}