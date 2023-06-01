import { NewUser, NewUserWithHashedPassword, User } from "../domain/users/user";

export interface UserRepository {
    createUser(newUser: NewUserWithHashedPassword): Promise<string | null>;
    getUser(id: string): Promise<User | null>;
    // getUsers();
    // updateUser();
}