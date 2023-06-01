import { NewUser, User, UserId } from "../domain/users/user";

export interface UserService {
    createUser(newUser: NewUser): Promise<UserId>;
    getUser(id: string): Promise<User | null>;
}