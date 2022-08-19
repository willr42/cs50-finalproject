// A fullscreen takeover
// Title of recipe
// Category
// Cooking time
// Ingredients Details
// Method
// Close
import { MouseEventHandler, useContext, useEffect, useState } from 'react';
import styles from './RecipeDetails.module.css';
import recipeJSON from '../temp-recipes.json';
import RecipeTimeAndServe from './RecipeTimeAndServe';
import { RecipeRecord } from './RecipeList';
import Modal from './Modal';

type RecipeDetailsProps = {
  id: number;
  onClick: MouseEventHandler;
};

const userRecipes = recipeJSON.recipes;

const RecipeDetails: React.FunctionComponent<RecipeDetailsProps> = ({
  id,
  onClick,
}) => {
  // state
  const [chosenRecipe, setChosenRecipe] = useState<RecipeRecord>();

  // TODO: update this to use context passed in. Might not need useEffect - data is already in memory.
  // fetch the detailed recipe
  // useEffect(() => {
  //   let ignore = false;
  //   let foundRecipe = userRecipes.find((recipe) => {
  //     return recipe.id === id;
  //   });
  //   if (!ignore) {
  //     if (foundRecipe) {
  //       setChosenRecipe(foundRecipe);
  //     }
  //   }
  //   return () => {
  //     ignore = true;
  //   };
  // }, [id]);

  if (!chosenRecipe || id === 0) {
    return <></>;
  }

  // return a fullscreen modal with a listener to turn off the modal class
  else {
    return (
      <Modal onClick={onClick}>
        <div className={styles.recipeContainer}>
          <h2 className={styles.recipeName}>{chosenRecipe.contents.name}</h2>
          <h3 className={styles.recipeSource}>
            {chosenRecipe.contents.source}
          </h3>
          <RecipeTimeAndServe
            time={chosenRecipe.contents.time}
            serves={chosenRecipe.contents.serves}
          />
          <div className={styles.ingredientsContainer}>
            <h3 className={styles.ingredientsTitle}>Ingredients</h3>
            {chosenRecipe.contents.ingredients.map((ingredient) => (
              <li className={styles.ingredientsContent}>{ingredient}</li>
            ))}
            <p className={styles.ingredientsContent}>{}</p>
          </div>
          <div className={styles.methodContainer}>
            <h3 className={styles.methodTitle}>Method</h3>
            {chosenRecipe.contents.method.map((step) => (
              <ol className={styles.methodContent}>{step}</ol>
            ))}
            <p className={styles.methodContent}>{}</p>
          </div>
        </div>
      </Modal>
    );
  }
};

export default RecipeDetails;
export {};
