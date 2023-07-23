import { PackId, Pack, NewPack } from "../domain/pets/pack";
import { PetId, Pet, CreatePetInput } from "../domain/pets/pet";
import { User, UserId } from "../domain/users/user";

export interface PackService {
    createPack(pack: NewPack, ownerId: User["id"], pets: CreatePetInput[]): Promise<PackId>;
    createPet(packId: PackId["id"], pet: CreatePetInput): Promise<PetId>;
    getPack(packId: PackId["id"]): Promise<Pack | null>;
    getUserPacks(userId: UserId["id"]): Promise<Pack[]>;
    getPackPets(packId: PackId["id"]): Promise<Pet[]>;
}
