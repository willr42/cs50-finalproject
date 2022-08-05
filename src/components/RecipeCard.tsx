// RecipeCard features an image of the recipe (uploaded by user, stored on deployed server) a title and a category of meal
// When tapped, it loads a RecipeDetails with the full info.
import { MouseEventHandler } from 'react';
import styles from './RecipeCard.module.css';

type RecipeCardProps = {
  name: string;
  time: string;
  serves: string;
  onClick: MouseEventHandler;
};

const RecipeCard: React.FunctionComponent<RecipeCardProps> = ({
  name,
  time,
  serves,
}) => {
  return (
    <div className={styles.recipeCard}>
      <h1>{name}</h1>
      <p>{time}</p>
      <p>{serves}</p>
    </div>
  );
};

export default RecipeCard;
export {};
