import RecipeList from './components/RecipeList';
import './App.css';
import { RecipeContextProvider } from './components/RecipeContext';

function App() {
  return (
    <main>
      <RecipeContextProvider>
        <RecipeList />
      </RecipeContextProvider>
    </main>
  );
}

export default App;
