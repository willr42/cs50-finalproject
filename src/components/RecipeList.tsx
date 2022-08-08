// Main homepage component: Recipe List contains RecipeCards.
// You can filter the RecipeList by category. Categories appear as pills. Categories are preset.

import { useState } from 'react';
import recipeJSON from '../temp-recipes.json';
import RecipeCard from './RecipeCard';
import RecipeDetails from './RecipeDetails';
import styles from './RecipeList.module.css';

const userRecipes = recipeJSON.recipes;

const RecipeList = () => {
  const [clickedRecipeID, setClickedRecipeID] = useState(0);

  return (
    <div>
      <RecipeDetails
        id={clickedRecipeID}
        onClick={(event) => {
          setClickedRecipeID(0);
        }}
      ></RecipeDetails>
      <div className={styles.recipeList}>
        {userRecipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              time={recipe.time}
              serves={recipe.serves}
              onClick={() => {
                setClickedRecipeID(recipe.id);
              }}
            ></RecipeCard>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeList;
export {};
