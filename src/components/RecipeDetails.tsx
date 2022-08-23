// A fullscreen takeover
// Title of recipe
// Category
// Cooking time
// Ingredients Details
// Method
// Close
import { MouseEventHandler, useEffect, useState } from 'react';
import styles from './RecipeDetails.module.css';
import RecipeTimeAndServe from './RecipeTimeAndServe';
import { RecipeRecord } from './types';
import Modal from './Modal';

type RecipeDetailsProps = {
  recipes: RecipeRecord[];
  id: number;
  onClick: MouseEventHandler;
};

const RecipeDetails: React.FunctionComponent<RecipeDetailsProps> = ({
  id,
  recipes,
  onClick,
}) => {
  // state
  const [chosenRecipe, setChosenRecipe] = useState<RecipeRecord>();

  useEffect(() => {
    let foundRecipe = recipes.find((recipe) => recipe.recipe_id === id);
    setChosenRecipe(foundRecipe);
  }, [id, recipes]);

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
          <div className={styles.detailsContainer}>
            <h3 className={styles.ingredientsTitle}>Ingredients</h3>
            <ul>
              {chosenRecipe.contents.ingredients.map((ingredient) => (
                <li className={styles.listItems}>{ingredient}</li>
              ))}
            </ul>
            <p className={styles.ingredientsContent}>{}</p>
          </div>
          <div className={styles.detailsContainer}>
            <h3 className={styles.methodTitle}>Method</h3>
            <ol className={styles.methodContent}>
              {chosenRecipe.contents.method.map((step) => (
                <li className={styles.listItems}>{step}</li>
              ))}
            </ol>
            <p className={styles.methodContent}>{}</p>
          </div>
        </div>
      </Modal>
    );
  }
};

export default RecipeDetails;
export {};
