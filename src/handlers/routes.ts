import { TypedFastifyInstance } from "./route";
import { packRoutes } from "./packs/routes";
import { userPublicRoutes, userRoutes } from "./users/routes";
import { authPublicRoutes } from "./auth/routes";

export const registerRoutes = (f: TypedFastifyInstance) => {
    userRoutes(f);
    packRoutes(f);
};

export const registerPublicRoutes = (f: TypedFastifyInstance) => {
    userPublicRoutes(f);
    authPublicRoutes(f);
};
