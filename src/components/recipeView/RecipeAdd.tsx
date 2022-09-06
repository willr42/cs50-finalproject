import Modal from '../Modal';
import { useContext, useState } from 'react';
import { RecipeContext } from '../RecipeContext';
import styles from './RecipeAdd.module.css';
import { RecipeRecord } from '../types';
// will need to call a utility function to add a new recipe to DB

// form needs to reflect RecipeRecord type

const RecipeAdd = () => {
  const recipes = useContext(RecipeContext);
  const [addShowing, setAddShowing] = useState(false);
  const [recipeContents, setRecipeContents] = useState('');
  return (
    <>
      {addShowing ? (
        <Modal onClick={() => setAddShowing(false)}>
          <form className='form' autoComplete='false'>
            <label>
              <p className={styles.paragraphLabel}>Recipe Title</p>
              <input className='textInput' type='text' />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Source</p>
              <input
                className='textInput'
                type='text'
                placeholder='Where did you find it?'
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Time to cook</p>
              <input
                className='textInput'
                type='text'
                placeholder='eg. 01:30'
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Serves</p>
              <input
                className='textInput'
                type='number'
                placeholder='Serves how many?'
                min='1'
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Ingredients</p>
              <textarea
                className='textAreaInput'
                placeholder='100g mushrooms&#10;100ml milk'
                rows={10}
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Method</p>
              <textarea
                className='textAreaInput'
                placeholder='1. Preheat oven to 180°C.&#10;2.Chop up the mushrooms.'
                rows={10}
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
