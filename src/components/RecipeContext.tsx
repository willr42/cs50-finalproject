import { createContext, useEffect, useState } from 'react';
import { RecipeRecord } from './types';

type Props = {
  children?: React.ReactNode;
};

const RecipeContext = createContext<RecipeRecord[]>([]);

const RecipeContextProvider: React.FC<Props> = ({ children }) => {
  const [userRecipes, setUserRecipes] = useState<RecipeRecord[]>([]);

  // get user recipes
  useEffect(() => {
    let ignore = false;
    fetchWithCreds({ url: 'http://localhost:9080/api/recipes' })
      .then((result) => {
        return result.json();
      })
      .then((json: RecipeRecord[]) => {
        if (!ignore) {
          setUserRecipes(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <RecipeContext.Provider value={userRecipes}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeContextProvider };
