type RecipeRecord = {
  recipe_id: number;
  contents: {
    name: string;
    source: string;
    time: number;
    serves: string;
    ingredients: Array<string>;
    method: Array<string>;
  };
};

export type { RecipeRecord };
