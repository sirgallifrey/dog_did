export interface UserId {
    id: string;
}

export interface NewUser {
    name: string;
    email: string;
    password: string;
}

export interface NewUserWithHashedPassword {
    name: string;
    email: string;
    passwordHash: string;
}

export interface User extends UserId {
    name: string;
    email: string;
    passwordHash: string;
    createdAt: string;
}
