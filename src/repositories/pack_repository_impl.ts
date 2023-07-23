import { NewPack, Pack, PackId } from "../domain/pets/pack";
import { CreatePetInput, Pet, PetId } from "../domain/pets/pet";
import { createId } from "../infrastructure/cuid";
import { nowDateTime, toDateTime } from "../infrastructure/time";
import { DB } from "../infrastructure/types";
import { PackRepository } from "./pack_repository";

export class PackRepositoryImpl implements PackRepository {
    constructor(private readonly db: DB) {}

    async getPack(packId: string): Promise<Pack | null> {
        const pack = await this.db.selectFrom("packs").where("id", "=", packId).selectAll().executeTakeFirst();
        if (!pack) {
            return null;
        }
        return pack;
    }

    // TODO should return null if pack does not exist
    async getPackPets(packId: string): Promise<Pet[]> {
        return await this.db.selectFrom("pets").where("packId", "=", packId).selectAll().execute();
    }

    async getUserPacks(userId: string): Promise<Pack[]> {
        return await this.db
            .selectFrom("packs")
            .selectAll()
            .where(({ eb, selectFrom }) =>
                eb("id", "in", selectFrom("pack_member").where("userId", "=", userId).select("packId"))
            )
            .execute();
    }

    async createPet(packId: string, pet: CreatePetInput): Promise<PetId> {
        const id = createId();
        await this.db
            .insertInto("pets")
            .values({
                ...pet,
                id,
                packId,
                createdAt: nowDateTime(),
            })
            .execute();
        return { id };
    }

    async createPack(pack: NewPack, ownerId: string, pets: CreatePetInput[]): Promise<PackId> {
        const packId = createId();
        await this.db.transaction().execute(async (trx) => {
            const what = await trx
                .insertInto("packs")
                .values({
                    ...pack,
                    id: packId,
                })
                .executeTakeFirstOrThrow();
            console.log("&&&&&&", what);

            await trx
                .insertInto("pack_member")
                .values({
                    id: createId(),
                    packId: packId,
                    userId: ownerId,
                    role: "owner",
                })
                .executeTakeFirstOrThrow();

            if (pets.length) {
                await trx
                    .insertInto("pets")
                    .values(
                        pets.map((pet) => ({
                            ...pet,
                            id: createId(),
                            packId: packId,
                            birthDate: pet.birthDate ? toDateTime(pet.birthDate) : null,
                            createdAt: nowDateTime(),
                        }))
                    )
                    .execute();
            }
        });
        return { id: packId };
    }
}
