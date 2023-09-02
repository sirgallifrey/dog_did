import { NewPack, Pack, PackId } from "../domain/pets/pack";
import { CreatePetInput, Pet, PetId } from "../domain/pets/pet";
import { PackRepository } from "../repositories/pack_repository";
import { LoggerService } from "./log_service";
import { PackService } from "./pack_service";

export class PackServiceImpl implements PackService {
    constructor(private readonly logger: LoggerService, private readonly packRepository: PackRepository) {}

    async createPack(pack: NewPack, ownerId: string, pets: CreatePetInput[]): Promise<PackId> {
        this.logger.debug({ pack, ownerId, pets }, "Creating Pack");
        const result = await this.packRepository.createPack(pack, ownerId, pets);
        this.logger.info("New pack created");
        return result;
    }

    async createPet(packId: string, pet: CreatePetInput): Promise<PetId> {
        this.logger.debug({ packId, pet }, "Creating Pet");
        const result = await this.packRepository.createPet(packId, pet);
        this.logger.info("New pet created");
        return result;
    }

    async getPack(packId: string): Promise<Pack | null> {
        this.logger.debug({ packId }, "Fetching Pack");
        const pack = await this.packRepository.getPack(packId);
        this.logger.debug({ pack }, "Fetched Pack");
        return pack;
    }

    async getPackPets(packId: string): Promise<Pet[]> {
        // TODO check user permission
        this.logger.debug({ packId }, "Fetching Pack Pets");
        const pets = await this.packRepository.getPackPets(packId);
        this.logger.debug({ pets }, "Fetched Pack Pets");
        return pets;
    }
    async getUserPacks(userId: string): Promise<Pack[]> {
        // TODO check user permission
        this.logger.debug({ userId }, "Fetching Packs");
        const packs = await this.packRepository.getUserPacks(userId);
        this.logger.debug({ packs }, "Fetched Packs");
        return packs;
    }
}
