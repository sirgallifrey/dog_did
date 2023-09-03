import { Routes } from "../route";
import { getUser } from "./get_user";
import { postUser } from "./post_user";

const opts = {
    schema: {
        tags: ["Users"],
    },
};

export const userRoutes = new Routes(getUser);
export const userPublicRoutes = new Routes(postUser);

userRoutes.override(opts);
userPublicRoutes.override(opts);
