import { TSchema } from "@sinclair/typebox";
import * as LoginSchema from "./auth/login";
import * as PackSchemas from "./pets/pack";
import * as PetSchemas from "./pets/pet";
import * as UserSchemas from "./users/user";
import * as UserErrorSchemas from "./users/user_errors";
import * as PackErrorSchemas from "./pets/pack_errors";
import * as ErrorSchemas from "./errors/error";
import * as EventsSchemas from "./events/events";

export const ContractSchemas = {
    ...PackSchemas,
    ...PackErrorSchemas,
    ...PetSchemas,
    ...UserSchemas,
    ...UserErrorSchemas,
    ...LoginSchema,
    ...ErrorSchemas,
    ...EventsSchemas,
};

Object.keys(ContractSchemas).forEach((name) => {
    const schema = ContractSchemas[name] as TSchema;
    if (!schema.$id) {
        schema.$id = name;
    }
});
