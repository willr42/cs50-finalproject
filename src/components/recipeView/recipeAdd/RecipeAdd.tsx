import React, { useContext, useState } from 'react';
import { RecipeContext } from '../../RecipeContext';
import Modal from '../../Modal';
import styles from './RecipeAdd.module.css';
import { RecipeContents } from '../../types';
import recipeFormStateUpdate from './recipeFormStateUpdate';
// will need to call a utility function to add a new recipe to DB

// form needs to reflect RecipeRecord type

const RecipeAdd = () => {
  const recipes = useContext(RecipeContext);
  const [addShowing, setAddShowing] = useState(false);
  const [recipeContents, setRecipeContents] = useState<RecipeContents>();
  return (
    <>
      {addShowing ? (
        <Modal onClick={() => setAddShowing(false)}>
          <form className='form' autoComplete='false'>
            <label>
              <p className={styles.paragraphLabel}>Recipe Title</p>
              <input
                className='textInput'
                type='text'
                onChange={(e) =>
                  recipeFormStateUpdate(e, 'name', setRecipeContents)
                }
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Source</p>
              <input
                className='textInput'
                type='text'
                placeholder='Where did you find it?'
                onChange={(e) =>
                  recipeFormStateUpdate(e, 'source', setRecipeContents)
                }
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Time to cook</p>
              <input
                className='textInput'
                type='text'
                placeholder='eg. 01:30'
                onChange={(e) =>
                  recipeFormStateUpdate(e, 'time', setRecipeContents)
                }
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Serves</p>
              <input
                className='textInput'
                type='number'
                placeholder='Serves how many?'
                min='1'
                onChange={(e) =>
                  recipeFormStateUpdate(e, 'serves', setRecipeContents)
                }
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Ingredients</p>
              <textarea
                className='textAreaInput'
                placeholder='100g mushrooms&#10;100ml milk'
                rows={10}
                onChange={(e) =>
                  recipeFormStateUpdate(e, 'ingredients', setRecipeContents)
                }
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Method</p>
              <textarea
                className='textAreaInput'
                placeholder='1. Preheat oven to 180°C.&#10;2.Chop up the mushrooms.'
                rows={10}
                onChange={(e) =>
                  recipeFormStateUpdate(e, 'method', setRecipeContents)
                }
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
