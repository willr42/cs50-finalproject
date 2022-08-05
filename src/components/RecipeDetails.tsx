// A fullscreen takeover
// Title of recipe
// Category
// Cooking time
// Ingredients Details
// Method
// Close
import { useEffect, useState } from 'react';
import styles from './RecipeDetails.module.css';
import recipeJSON from '../temp-recipes.json';

type RecipeDetailsProps = {
  id: number;
};

type Recipe = {
  id: number;
  name: string;
  source: string;
  time: string;
  serves: string;
  ingredients: string[];
  method: string[];
};

const userRecipes = recipeJSON.recipes;

const RecipeDetails: React.FunctionComponent<RecipeDetailsProps> = ({ id }) => {
  // state
  const [chosenRecipe, setChosenRecipe] = useState<Recipe>();

  // fetch the detailed recipe
  useEffect(() => {
    let ignore = false;
    let foundRecipe = userRecipes.find((recipe) => {
      return recipe.id === id;
    });
    if (!ignore) {
      if (foundRecipe) {
        setChosenRecipe(foundRecipe);
      }
    }
    return () => {
      ignore = true;
    };
  }, [id]);

  if (!chosenRecipe) {
    return <></>;
  }

  // return a fullscreen modal with a listener to turn off the modal class
  else {
    return <div className={styles.recipeDetails}></div>;
  }
};

export default RecipeDetails;
export {};
