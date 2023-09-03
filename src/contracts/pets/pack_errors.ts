import { Type } from "@sinclair/typebox";

export const PackNotFoundErrorSchema = Type.Object({
    message: Type.String(),
});
