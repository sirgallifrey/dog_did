import { Kysely, MysqlDialect } from "kysely";
import { DB as GeneratedDB } from "../db/types";
import { createPool } from "mysql2";
import { DB } from "./types";

let db: DB | null = null;

export async function connect(connectionString: string) {
    if (!db) {
        db = new Kysely<GeneratedDB>({
            log: ["query", "error"],
            dialect: new MysqlDialect({
                pool: createPool({
                    uri: connectionString,
                }),
            }),
        });
    }
}

export function getDB() {
    if (!db) {
        throw new Error("Database is not connected");
    }

    return db;
}
