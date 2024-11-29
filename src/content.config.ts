import { defineCollection, z } from "astro:content";

const ingredients = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    localNames: z.array(z.string()),
    category: z.enum(["spices", "vegetables", "fruit"]),
  }),
});

export const collections = { ingredients };
