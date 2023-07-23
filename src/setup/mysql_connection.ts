import { FastifyInstance } from "fastify";
import { connect } from "../infrastructure/query_builder";

export function setupMysqlConnection(instance: FastifyInstance) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        throw new Error("DATABASE_URL environment variable is missing");
    }
    connect(connectionString);
    instance.log.info("Connected with MySQL server");
}
