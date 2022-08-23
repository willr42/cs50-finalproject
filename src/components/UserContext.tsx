import { createContext, useEffect, useState } from 'react';
import { ReactNode, FC } from 'react'; //types

type Props = {
  children?: ReactNode;
};

const UserContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (auth: boolean) => {},
});

const UserContextProvider: FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleCheckLogin() {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then((data) => data.json());
  }

  useEffect(() => {
    let ignore = false;
    async function checkLogin() {
      const result = await handleCheckLogin();
      if (!ignore) {
        if (result.isLoggedIn) {
          setIsLoggedIn(true);
        }
      }
    }

    checkLogin();

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
