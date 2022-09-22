import styles from './Footer.module.css';
import RecipeAdd from './recipeView/recipeAdd/RecipeAdd';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <RecipeAdd />
    </div>
  );
};

export default Footer;
