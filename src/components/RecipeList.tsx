// Main homepage component: Recipe List contains RecipeCards.
// You can filter the RecipeList by category. Categories appear as pills. Categories are preset.

import recipeJSON from '../temp-recipes.json';
import RecipeCard from './RecipeCard';
import styles from './RecipeList.module.css';

const userRecipes = recipeJSON.recipes;

const RecipeList = () => {
  return (
    <div className={styles.recipeList}>
      {userRecipes.map((recipe) => {
        return (
          <RecipeCard
            name={recipe.name}
            time={recipe.time}
            serves={recipe.serves}
          ></RecipeCard>
        );
      })}
    </div>
  );
};

export default RecipeList;
export {};
