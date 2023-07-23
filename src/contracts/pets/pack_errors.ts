import { z } from "zod";

export const PackNotFoundErrorSchema = z.object({
    message: z.string(),
});
