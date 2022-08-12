// A fullscreen takeover
// Title of recipe
// Category
// Cooking time
// Ingredients Details
// Method
// Close
import { MouseEventHandler, useEffect, useState } from 'react';
import styles from './RecipeDetails.module.css';
import recipeJSON from '../temp-recipes.json';
import RecipeTimeAndServe from './RecipeTimeAndServe';

type RecipeDetailsProps = {
  id: number;
  onClick: MouseEventHandler;
};

type Recipe = {
  id: number;
  name: string;
  source: string;
  time: number;
  serves: string;
  ingredients: string[];
  method: string[];
};

const userRecipes = recipeJSON.recipes;

const RecipeDetails: React.FunctionComponent<RecipeDetailsProps> = ({
  id,
  onClick,
}) => {
  // state
  const [chosenRecipe, setChosenRecipe] = useState<Recipe>();

  // close function. 'any' type to allow us to handle clicks and keyboard presses with the one passed-in function.
  const closeOnDetail = (event: any) => {
    onClick(event);
  };

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

  useEffect(() => {
    const keyListener = (event: any) => {
      console.log(event);
      if (event.code === 'Escape') {
        closeOnDetail(event);
      }
    };

    document.addEventListener('keydown', keyListener);
    // cleanup
    return () => {
      document.removeEventListener('keydown', keyListener);
    };
  });

  if (!chosenRecipe || id === 0) {
    return <></>;
  }

  // return a fullscreen modal with a listener to turn off the modal class
  else {
    return (
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.recipeContainer}>
            <h2 className={styles.recipeName}>{chosenRecipe.name}</h2>
            <h3 className={styles.recipeSource}>{chosenRecipe.source}</h3>
            <RecipeTimeAndServe
              time={chosenRecipe.time}
              serves={chosenRecipe.serves}
            />
          </div>
          <button className={styles.closeModalButton} onClick={onClick}>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
      </div>
    );
  }
};

export default RecipeDetails;
export {};
