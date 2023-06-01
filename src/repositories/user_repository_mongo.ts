import { Db, ObjectId, WithId } from "mongodb";
import { UserRepository } from "./user_repository";
import { NewUserWithHashedPassword, User, UserId } from "../domain/users/user";

type DbUser = Omit<User, 'id'>;

function mapUser(user: WithId<DbUser>): User {
    const { _id, ...userProperties } = user;
    return {
        id: _id.toString(),
        ...userProperties
    }
}
export class UserRepositoryMongo implements UserRepository{
    constructor(private readonly db: Db) {};

    private get collection() {
        return this.db.collection<DbUser>('users');
    }

    async getUser(id: string): Promise<User | null> {
        const users = await this.collection.find({ _id: new ObjectId(id) }).toArray();

        if (!users || !users.length) {
            return null;
        }

        return mapUser(users[0]);
    }

    async createUser({
        username,
        email,
        passwordHash
    }: NewUserWithHashedPassword): Promise<UserId["id"] | null> {
        const result = await this.collection.insertOne({
            username,
            email,
            passwordHash,
            createdAt: new Date().toISOString()
        });

        return result.insertedId?.toString() || null;
    }
}