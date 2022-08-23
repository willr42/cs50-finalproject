import { createContext, useEffect, useState } from 'react';
import { RecipeRecord } from './types';

type Props = {
  children?: React.ReactNode;
};

const RecipeContext = createContext<RecipeRecord[]>([]);

const RecipeContextProvider: React.FC<Props> = ({ children }) => {
  const [userRecipes, setUserRecipes] = useState<RecipeRecord[]>([]);
  async function handleRecipeFetch() {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/api/recipes`, {
      method: 'GET',
      credentials: 'include',
    }).then((data) => data.json());
  }

  // get user recipes
  useEffect(() => {
    let ignore = false;
    async function fetchRecipes() {
      const result = await handleRecipeFetch();
      if (!ignore) {
        setUserRecipes(result);
      }
    }
    fetchRecipes();

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
