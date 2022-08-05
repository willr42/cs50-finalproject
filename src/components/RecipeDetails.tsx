// A fullscreen takeover
// Title of recipe
// Category
// Cooking time
// Ingredients Details
// Method
// Close
import { useState } from 'react';
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
  let foundRecipe = userRecipes.find((recipe) => {
    return recipe.id === id;
  });

  setChosenRecipe(foundRecipe);

  if (chosenRecipe === undefined) {
    return <></>;
  }

  // TODO: return a fullscreen modal with a listener to turn off the modal class
  return <div className={styles.recipeDetails}></div>;
};

export default RecipeDetails;
export {};
