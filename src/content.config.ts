import { defineCollection, z } from "astro:content";
import { ingredientCategories } from "./utils/data";

// Converts the result of Object.keys() into a tuple type that guarantees
// at least one key (we know the Record isn't empty) as required for z.enum()
const ingredientCategoryKeys = Object.keys(ingredientCategories) as [
  string,
  ...string[]
];

const IngredientDetailsSchema = z.object({
  name: z.string().min(3),
  category: z.enum(ingredientCategoryKeys),
  image: z.string().url(),
  scientificName: z.string(),
  localNames: z.array(z.string()).min(1),
});

const ingredients = defineCollection({
  type: "data",
  schema: IngredientDetailsSchema,
});

export type IngredientDetails = z.infer<typeof IngredientDetailsSchema>;

export const collections = { ingredients };
