import { z } from "zod";
import * as LoginSchema from "./auth/login";
import * as PackSchemas from "./pets/pack";
import * as PetSchemas from "./pets/pet";
import * as UserSchemas from "./users/user";
import * as UserErrorSchemas from "./users/user_errors";
import * as PackErrorSchemas from "./pets/pack_errors";
import * as ErrorSchemas from "./errors/error";

const EmptySchema = z.never();

export const ContractSchemas = {
    ...PackSchemas,
    ...PackErrorSchemas,
    ...PetSchemas,
    ...UserSchemas,
    ...UserErrorSchemas,
    ...LoginSchema,
    ...ErrorSchemas,
    EmptySchema,
};
