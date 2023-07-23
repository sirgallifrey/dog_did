import { DB } from "../infrastructure/types";
import { UserRepository } from "./user_repository";
import { NewUserWithHashedPassword, User, UserId } from "../domain/users/user";
import { createId } from "../infrastructure/cuid";
import { nowDateTime } from "../infrastructure/time";

// type DbUser = Omit<User, "id">;

export class UserRepositoryImpl implements UserRepository {
    constructor(private readonly db: DB) {}

    async getUser(id: string): Promise<User | null> {
        const user = await this.db.selectFrom("users").where("id", "=", id).selectAll().executeTakeFirst();

        if (!user) {
            return null;
        }

        return user;
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const user = await this.db.selectFrom("users").where("email", "=", email).selectAll().executeTakeFirst();

        if (!user) {
            return null;
        }

        return user;
    }

    async createUser({ name, email, passwordHash }: NewUserWithHashedPassword): Promise<UserId> {
        const id = createId();
        await this.db
            .insertInto("users")
            .values({
                id,
                name,
                email,
                passwordHash,
                createdAt: nowDateTime(),
            })
            .execute();

        return { id };
    }
}
