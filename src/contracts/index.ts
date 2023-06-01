import { z } from "zod";
import * as PackSchemas from "./pets/pack";
import * as UserSchemas from "./users/user";
import * as UserErrorSchemas from "./users/user_errors";

const EmptySchema = z.never();

export const ContractSchemas = {
    ...PackSchemas,
    ...UserSchemas,
    ...UserErrorSchemas,
    EmptySchema
};