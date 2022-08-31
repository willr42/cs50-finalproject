// RecipeCard features an image of the recipe (uploaded by user, stored on deployed server) a title and a category of meal
// When tapped, it loads a RecipeDetails with the full info.
import { MouseEventHandler } from 'react';
import styles from './RecipeCard.module.css';
import RecipeTimeAndServe from './RecipeTimeAndServe';

type RecipeCardProps = {
  name: string;
  time: number;
  serves: string;
  onClick: MouseEventHandler;
};

const RecipeCard: React.FunctionComponent<RecipeCardProps> = ({
  name,
  time,
  serves,
  onClick,
}) => {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.cardInside}>
        <h1>{name}</h1>
        <div className={styles.cardDetails}>
          <RecipeTimeAndServe time={time} serves={serves} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
export {};
