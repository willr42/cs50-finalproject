import React from 'react';
import { RecipeContents } from '../../types';

/**
 *
 * @param event React ChangeEvent
 * @param value value in recipe to be updated
 * @param stateUpdater state update function
 */
export function recipeFormInputUpdate(
  event: React.ChangeEvent<HTMLInputElement>,
  value: string | number,
  stateUpdater: Function
) {
  stateUpdater((previousState: RecipeContents) => {
    const newValue: Partial<RecipeContents> = {
      [value]: event.target.value,
    };
    return Object.assign({}, previousState, newValue);
  });
}

export function recipeFormTextAreaUpdate(
  event: React.ChangeEvent<HTMLTextAreaElement>,
  value: string | number,
  stateUpdater: Function
) {
  const valueArray = event.target.value.split('\n');
  stateUpdater((previousState: RecipeContents) => {
    const newValue: Partial<RecipeContents> = {
      [value]: valueArray,
    };
    return Object.assign({}, previousState, newValue);
  });
}
