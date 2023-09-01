import { EventRepository } from "./event_repository";
import { PackRepository } from "./pack_repository";
import { UserRepository } from "./user_repository";

export interface Repositories {
    eventRepository: EventRepository;
    packRepository: PackRepository;
    userRepository: UserRepository;
}
