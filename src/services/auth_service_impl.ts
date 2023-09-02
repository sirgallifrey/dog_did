import { AuthService } from "./auth_service";
import { hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { Claims } from "../domain/auth/claims";

const saltRounds = 12;
// TODO we probably need a service to manage/validate configuration
// but it's not a priority for now
const secret: string = process.env.JWT_SECRET!;
export class AuthServiceImpl implements AuthService {
    constructor() {
        if (!secret) {
            throw new Error("JWT_SECRET not set. Cannot initialize the AuthService");
        }
    }
    async hashPassword(password: string): Promise<string> {
        // TODO: wrap on a custom error not to leak bcrypt errors
        return hash(password, saltRounds);
    }

    async verifyPassword(password: string, passwordHash: string): Promise<boolean> {
        return compare(password, passwordHash);
    }

    createToken(claims: Claims): string {
        return sign(claims, secret, {
            expiresIn: "24h",
        });
    }

    validateAndParseToken(token: string): Claims {
        return verify(token, secret) as Claims;
    }
}
