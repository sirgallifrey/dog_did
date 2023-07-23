import { z } from "zod";
import * as PackSchemas from "./pets/pack";
import * as PetSchemas from "./pets/pet";
import * as UserSchemas from "./users/user";
import * as UserErrorSchemas from "./users/user_errors";
import * as PackErrorSchemas from "./pets/pack_errors";

const EmptySchema = z.never();

export const ContractSchemas = {
    ...PackSchemas,
    ...PackErrorSchemas,
    ...PetSchemas,
    ...UserSchemas,
    ...UserErrorSchemas,
    EmptySchema,
};
