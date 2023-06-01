import { z } from "zod";

export const UserNotFoundErrorSchema = z.object({
    message: z.string()
});
