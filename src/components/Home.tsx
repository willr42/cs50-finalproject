import { ReactNode, FC, useContext } from 'react'; //types
import Footer from './Footer';
import LoginNav from './LoginNav';
import { RecipeContextProvider } from './RecipeContext';
import RecipeList from './recipeView/RecipeList';
import { UserContext } from './UserContext';

type Props = {
  children?: ReactNode;
};

const Home: FC<Props> = ({ children }) => {
  const ctx = useContext(UserContext);
  if (ctx.isLoggedIn) {
    return (
      <RecipeContextProvider>
        <RecipeList />
        <Footer />
      </RecipeContextProvider>
    );
  } else {
    return (
      <div>
        <LoginNav />
      </div>
    );
  }
};

export default Home;
