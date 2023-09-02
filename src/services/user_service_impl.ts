import { omit } from "lodash";
import { NewUser, User, UserId } from "../domain/users/user";
import { UserRepository } from "../repositories/user_repository";
import { LoggerService } from "./log_service";
import { UserService } from "./user_service";
import { AuthService } from "./auth_service";

export class UserServiceImpl implements UserService {
    constructor(
        private readonly logger: LoggerService,
        private readonly userRepository: UserRepository,
        private readonly authService: AuthService
    ) {}

    async getUser(id: string): Promise<User | null> {
        this.logger.debug({ id }, "Get User");
        const user = await this.userRepository.getUser(id);
        this.logger.debug({ user: omit(user, ["passwordHash"]) }, "Get User success");
        return user;
    }

    async getUserByEmail(email: string): Promise<User | null> {
        this.logger.debug({ email }, "Get User by email");
        const user = await this.userRepository.getUserByEmail(email);
        this.logger.debug({ user: user && omit(user, ["passwordHash"]) }, "Get User by email success");
        return user;
    }

    async createUser(newUser: NewUser): Promise<UserId> {
        const { password, ...newUserProperties } = newUser;
        this.logger.debug({ newUser: newUserProperties }, "Creating new User");
        let user;
        try {
            const passwordHash = await this.authService.hashPassword(password);
            user = await this.userRepository.createUser({
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
