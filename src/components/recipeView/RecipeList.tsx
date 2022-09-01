// Main homepage component: Recipe List contains RecipeCards.
// You can filter the RecipeList by category. Categories appear as pills. Categories are preset.

import { useContext, useState } from 'react';
import RecipeCard from './RecipeCard';
import { RecipeContext } from '../RecipeContext';
import RecipeDetails from './RecipeDetails';
import styles from './RecipeList.module.css';

const RecipeList = () => {
  const recipes = useContext(RecipeContext);

  const [clickedRecipeID, setClickedRecipeID] = useState(0);

  return (
    <div>
      <RecipeDetails
        recipes={recipes}
        id={clickedRecipeID}
        onClick={() => {
          setClickedRecipeID(0);
        }}
      ></RecipeDetails>
      <div className={styles.recipeList}>
        {recipes.length ? (
          recipes.map((recipe) => {
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
          })
        ) : (
          <div className={styles.container}>
            <p className={styles.shoutout}>
              No recipes found. Add your first one below!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
