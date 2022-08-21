import { createContext, useEffect, useState } from 'react';
import { RecipeRecord } from './types';

type Props = {
  children?: React.ReactNode;
};

const RecipeContext: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRecipes, setUserRecipes] = useState<RecipeRecord[]>([]);
  const RecipeContext = createContext(userRecipes);

  // get user recipes
  useEffect(() => {
    let ignore = false;
    fetch('http://localhost:9080/api/recipes')
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
  }, [isAuthenticated]);

  return (
    <RecipeContext.Provider value={userRecipes}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
