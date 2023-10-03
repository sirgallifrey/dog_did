import { FastifyInstance } from "fastify";
import { connect, isConnected } from "../infrastructure/query_builder";

export async function setupMysqlConnection(instance: FastifyInstance) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        throw new Error("DATABASE_URL environment variable is missing");
    }
    connect(connectionString);
    try {
        await isConnected();
    } catch (e) {
        instance.log.error(e);
        throw new Error("Could not create database connection");
    }
    instance.log.info("Connected with MySQL server");
}
