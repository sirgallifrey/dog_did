import bcrypt from "bcrypt";
import { NewUser, User, UserId } from "../domain/users/user";
import { UserRepository } from "../repositories/user_repository";
import { LoggerService } from "./log_service";
import { UserService } from "./user_service";

export class UserServiceImpl implements UserService {
    constructor(private readonly logger: LoggerService, private readonly userRepo: UserRepository) {}

    async getUser(id: string): Promise<User | null> {
        this.logger.debug({ id }, "Get User");
        const user = await this.userRepo.getUser(id);
        // TODO: omit password hash from logger
        this.logger.debug({ user }, "Get User success");
        return user;
    }

    async createUser(newUser: NewUser): Promise<UserId> {
        const { password, ...newUserProperties } = newUser;
        const passwordHash = await bcrypt.hash(password, 10);
        const id = await this.userRepo.createUser({
            ...newUserProperties,
            passwordHash
        });
        if (!id) {
            // TODO: better error
            this.logger.error('Repository returned null id while creating user');
            throw new Error('User not created');
        }
        this.logger.info("New user created");
        this.logger.debug({ newUserProperties }, "New user created success");
        return { id };
    }
}
