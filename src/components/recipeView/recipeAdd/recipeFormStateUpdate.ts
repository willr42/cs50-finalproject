import { RecipeContents } from '../../types';

export default function recipeFormStateUpdate(
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
