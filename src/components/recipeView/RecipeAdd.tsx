import Modal from '../Modal';
import { useContext, useState } from 'react';
import { RecipeContext } from '../RecipeContext';
import styles from './RecipeAdd.module.css';
// will need to call a utility function to add a new recipe to DB

const RecipeAdd = () => {
  const recipes = useContext(RecipeContext);
  const [addShowing, setAddShowing] = useState(false);
  const [recipeContents, setRecipeContents] = useState('');
  return (
    <>
      {addShowing ? (
        <Modal onClick={() => setAddShowing(false)}>
          <form className='form'>
            <label>
              <p className={styles.paragraphLabel}>Recipe Name</p>
              <input
                className='textInput'
                type='text'
                onChange={(e) => setRecipeContents(e.target.value)}
              />
            </label>
          </form>
        </Modal>
      ) : (
        <></>
      )}
      <button className='defaultButton' onClick={() => setAddShowing(true)}>
        Add recipe
      </button>
    </>
  );
};

export default RecipeAdd;
