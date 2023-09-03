import { Type } from "@sinclair/typebox";

export const PaginatedSchema = Type.Object({
    pagination: Type.Object({
        page: Type.Number({ description: "Page number. Starts at 1" }),
        pageSize: Type.Number({ description: "How many elements on a page" }),
        total: Type.Number({ description: "Total number of elements" }),
    }),
});
