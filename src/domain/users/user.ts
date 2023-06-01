export interface UserId {
    id: string
}

export interface NewUser {
    username: string;
    email: string;
    password: string;
};

export interface NewUserWithHashedPassword {
    username: string;
    email: string;
    passwordHash: string,
};

export interface User extends UserId {
    username: string,
    email: string,
    passwordHash: string,
    createdAt: string,
}