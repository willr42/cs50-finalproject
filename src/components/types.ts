type Modify<T, R> = Omit<T, keyof R> & R;
interface RecipeContents {
  name: string;
  source: string;
  time: number;
  serves: string;
  ingredients: Array<string>;
  method: Array<string>;
}

type FrontendRecipeContents = Modify<
  RecipeContents,
  {
    ingredients: string;
    method: string;
  }
>;

type RecipeRecord = {
  recipe_id: number;
  contents: RecipeContents;
};

export type { RecipeRecord, RecipeContents, FrontendRecipeContents };
