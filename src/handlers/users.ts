import { routes } from "./instance";
import { getUser } from "./users/get_user";
import { postUser } from "./users/post_user";

export const userRoutes = routes(getUser, postUser);
