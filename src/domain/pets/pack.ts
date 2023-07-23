export interface PackId {
    id: string;
}

export enum PackMemberRole {
    OWNER = "owner",
    ADMIN = "admin",
    MEMBER = "member",
}

export interface PackMember {
    id: number;
    userId: number;
    packId: number;
    role: PackMemberRole;
}

export interface AddPackMemberInput {
    userId: number;
    role: PackMemberRole;
}

export interface NewPack {
    name: string;
}

export interface Pack extends PackId {
    name: string;
}
