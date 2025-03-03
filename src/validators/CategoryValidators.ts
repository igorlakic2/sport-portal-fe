import { z } from "zod";

export const CategoryCreateUpdateSchema = z.object({
  name: z.string({ message: "Name is required" }),
});
