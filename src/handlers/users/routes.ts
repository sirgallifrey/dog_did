import { routes } from "../route";
import { getUser } from "./get_user";
import { postUser } from "./post_user";

export const userRoutes = routes(getUser);
export const userPublicRoutes = routes(postUser);
