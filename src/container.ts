import { Claims } from "./domain/auth/claims";
import { DB } from "./infrastructure/types";
import { Repositories } from "./repositories/repositories";
import { Services } from "./services/services";

interface ScopedValues {
    authClaims?: Claims;
}

interface Infrastructure {
    db: DB;
}

export interface Container extends Services, Repositories, ScopedValues, Infrastructure {}
