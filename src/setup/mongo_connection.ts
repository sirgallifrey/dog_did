import { FastifyInstance } from "fastify";
import { connect } from "../infrastructure/mongodb";

export async function setupMongoConnection(instance: FastifyInstance) {
    const connectionString = process.env.MONGODB_CONNECTION;
    if (!connectionString) {
        throw new Error("MONGODB_CONNECTION environment variable is missing");
    }
    await connect(connectionString);
    instance.log.info("Connected with MongoDB server");
}
