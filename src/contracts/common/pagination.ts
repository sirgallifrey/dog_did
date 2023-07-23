import { z } from "zod";

export const PaginatedSchema = z.object({
    pagination: z.object({
        page: z.number().describe("Page number. Starts at 1"),
        pageSize: z.number().describe("How many elements on a page"),
        total: z.number().describe("Total number of elements"),
    }),
});
