export interface PetId {
    id: string;
}
export interface Pet extends PetId {
    name: string;
    packId: string;
    breed?: string | null;
    color?: string | null;
    birthDate?: string | null;
    createdAt: string;
}

export interface CreatePetInput {
    name: string;
    breed?: string | null;
    color?: string | null;
    birthDate?: string | null;
}
