import { NewUserWithHashedPassword, User, UserId } from "../domain/users/user";

export interface UserRepository {
    createUser(newUser: NewUserWithHashedPassword): Promise<UserId>;
    getUser(id: string): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
}
