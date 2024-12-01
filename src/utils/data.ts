export type IngredientCategoryInfo = {
  title: string;
  icon: string;
};

export const ingredientCategories: Record<string, IngredientCategoryInfo> = {
  spice: { title: "Spices", icon: "🌶️" },
  vegetable: { title: "Vegetables", icon: "🫑" },
  fruit: { title: "Fruits", icon: "🍇" },
};
