import { NewUser, NewUserWithHashedPassword, User, UserId } from "../domain/users/user";

export interface UserRepository {
    createUser(newUser: NewUserWithHashedPassword): Promise<UserId["id"] | null>;
    getUser(id: string): Promise<User | null>;
    // getUsers();
    // updateUser();
}