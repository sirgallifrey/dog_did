import { TypedFastifyInstance } from "./instance";
import { packRoutes } from "./packs";
import { userRoutes } from "./users";

export const registerRoutes = (f: TypedFastifyInstance) => {
    userRoutes(f);
    packRoutes(f);
};
