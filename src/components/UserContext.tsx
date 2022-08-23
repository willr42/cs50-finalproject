import { createContext, useEffect, useState } from 'react';
import { ReactNode, FC } from 'react'; //types
import fetchWithCreds from '../utils/fetchWithCreds';

type Props = {
  children?: ReactNode;
};

const UserContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (auth: boolean) => {},
});

const UserContextProvider: FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let ignore = false;
    fetchWithCreds({ url: `${process.env.REACT_APP_SERVER_URL}/login` })
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        if (!ignore) {
          if (json.isLoggedIn) {
            setIsLoggedIn(true);
          }
        }
      });
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
