import { Type } from "@sinclair/typebox";

export const UserNotFoundErrorSchema = Type.Object({
    message: Type.String(),
});
