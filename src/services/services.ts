import { LoggerService } from "./log_service";
import { PackService } from "./pack_service";
import { UserService } from "./user_service";

export interface Services {
    logger: LoggerService;
    packService: PackService;
    userService: UserService;
}
