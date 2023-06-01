import { MongoClient, Db } from "mongodb";

let client: MongoClient;

let db: Db | null = null;

export async function connect(connectionString: string) {
    client = new MongoClient(connectionString);
    // Use connect method to connect to the server
    await client.connect();
    db = client.db();
}

export function getDB() {
    if (!db) {
        throw new Error("Mongodb is not connected");
    }

    return db;
}
