import { useContext, useRef, useRef, useState } from 'react';
import { RecipeContext } from '../../RecipeContext';
import Modal from '../../Modal';
import styles from './RecipeAdd.module.css';
import { RecipeContents } from '../../types';
import {
  recipeFormInputUpdate,
  recipeFormTextAreaUpdate,
} from './recipeFormStateUpdate';
// will need to call a utility function to add a new recipe to DB

// form needs to reflect RecipeRecord type

const checkStringForTimeFormat = (input: string) => {
  const re = /\d?\d:\d\d/;
  return re.test(input);
};

const checkStringForTimeFormat = (input: string) => {
  const re = /\d?\d:\d\d/;
  return re.test(input);
};

const RecipeAdd = () => {
  let recipes = useContext(RecipeContext);
  const [addShowing, setAddShowing] = useState(false);
  const [recipeContents, setRecipeContents] = useState<RecipeContents>();
  const timeInputEl = useRef<HTMLInputElement>(null);
  const timeInputEl = useRef<HTMLInputElement>(null);

  async function addNewRecipe(newRecipe: RecipeContents) {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/api/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
      credentials: 'include',
    }).then((data) => data.json());
  }

  const handleSubmit: React.FormEventHandler = async (event) => {
    event.preventDefault();
    // typeguard
    if (!recipeContents) {
      console.log('Something went wrong...');
      return;
    }
    // returns the added recipe
    const response = await addNewRecipe(recipeContents);

    // update state with new recipe
    console.log(response);
    recipes = [...recipes, response];
  };

  // Ensure form contains valid timestring.
  const emptyTimeInput = () => {
    if (timeInputEl.current) {
      timeInputEl.current.value = '';
      timeInputEl.current.setCustomValidity('Must be in 00:00 format');
      timeInputEl.current.reportValidity();
    }
  };

  // Ensure form contains valid timestring.
  const emptyTimeInput = () => {
    if (timeInputEl.current) {
      timeInputEl.current.value = '';
      timeInputEl.current.setCustomValidity('Must be in 00:00 format');
      timeInputEl.current.reportValidity();
    }
  };

  return (
    <>
      {addShowing ? (
        <Modal onClick={() => setAddShowing(false)}>
          <form
            className='form'
            autoComplete='false'
            onSubmit={handleSubmit}
            // add conditional. If submitting, we need to show something.
          >
            <label>
              <p className={styles.paragraphLabel}>Recipe Title</p>
              <input
                className='textInput'
                type='text'
                onChange={(e) =>
                  recipeFormInputUpdate(e, 'name', setRecipeContents)
                }
                required={true}
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Source</p>
              <input
                className='textInput'
                type='text'
                placeholder='Where did you find it?'
                onChange={(e) =>
                  recipeFormInputUpdate(e, 'source', setRecipeContents)
                }
                required={true}
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Time to cook</p>
              <input
                ref={timeInputEl}
                ref={timeInputEl}
                className='textInput'
                type='text'
                placeholder='eg. 01:30'
                onBlur={(e) => {
                  // Check if entered a valid time
                  if (checkStringForTimeFormat(e.target.value)) {
                    timeInputEl.current?.setCustomValidity('');
                    recipeFormInputUpdate(e, 'time', setRecipeContents);
                  } else {
                    emptyTimeInput();
                  }
                }}
                required={true}
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
                  recipeFormInputUpdate(e, 'serves', setRecipeContents)
                }
                required={true}
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Ingredients</p>
              <textarea
                className='textAreaInput'
                placeholder='100g mushrooms&#10;100ml milk'
                rows={10}
                onChange={(e) =>
                  recipeFormTextAreaUpdate(e, 'ingredients', setRecipeContents)
                }
                required={true}
              />
            </label>
            <label>
              <p className={styles.paragraphLabel}>Method</p>
              <textarea
                className='textAreaInput'
                placeholder='1. Preheat oven to 180°C.&#10;2.Chop up the mushrooms.'
                rows={10}
                onChange={(e) =>
                  recipeFormTextAreaUpdate(e, 'method', setRecipeContents)
                }
                required={true}
              />
            </label>
            <button type='submit' className='defaultButton affirmButton'>
              Add recipe
            </button>
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
