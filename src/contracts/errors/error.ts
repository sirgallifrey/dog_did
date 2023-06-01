import { z } from "zod";

// TODO: Enhance
export const ErrorSchema = z.object({
    message: z.string()
})