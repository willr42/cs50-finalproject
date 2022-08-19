// Main homepage component: Recipe List contains RecipeCards.
// You can filter the RecipeList by category. Categories appear as pills. Categories are preset.

import { useState } from 'react';
import RecipeCard from './RecipeCard';
import RecipeContext from './RecipeContext';
import RecipeDetails from './RecipeDetails';
import styles from './RecipeList.module.css';

// const userRecipes = recipeJSON.recipes;

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

const RecipeList = () => {
  // TODO: update this : make user recipes inside a context so that recipedetails can use that rather than passing it down.
  const [clickedRecipeID, setClickedRecipeID] = useState(0);
  const [userRecipes, setUserRecipes] = useState<RecipeRecord[]>([]);

  return (
    <RecipeContext>
      <div>
        <RecipeDetails
          id={clickedRecipeID}
          onClick={() => {
            setClickedRecipeID(0);
          }}
        ></RecipeDetails>
        <div className={styles.recipeList}>
          {userRecipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.recipe_id}
                name={recipe.contents.name}
                time={recipe.contents.time}
                serves={recipe.contents.serves}
                onClick={() => {
                  setClickedRecipeID(recipe.recipe_id);
                }}
              ></RecipeCard>
            );
          })}
        </div>
      </div>
    </RecipeContext>
  );
};

export default RecipeList;
export type { RecipeRecord };
