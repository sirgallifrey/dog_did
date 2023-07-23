import bcrypt from "bcrypt";
import { NewUser, User, UserId } from "../domain/users/user";
import { UserRepository } from "../repositories/user_repository";
import { LoggerService } from "./log_service";
import { UserService } from "./user_service";
import { createId } from "../infrastructure/cuid";

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
        let user;
        try {
            user = await this.userRepo.createUser({
                ...newUserProperties,
                passwordHash,
            });
        } catch (error) {
            // TODO: create better error
            this.logger.error(error, "Error while creating User");
            // Throw a sanitized error so we don't leak DB info for users
            throw new Error("User not created");
        }

        this.logger.info("New user created");
        this.logger.debug({ newUserProperties }, "New user created success");
        return user;
    }
}
