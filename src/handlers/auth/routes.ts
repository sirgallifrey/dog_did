import { routes } from "../route";
import { login } from "./login";

export const authPublicRoutes = routes(login);
