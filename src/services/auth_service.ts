import { Claims } from "../domain/auth/claims";

export interface AuthService {
    hashPassword(password: string): Promise<string>;
    verifyPassword(password: string, passwordHash: string): Promise<boolean>;
    validateAndParseToken(token: string): Claims;
    createToken(claims: Claims): string;
}
