import './App.css';
import { UserContextProvider } from './components/UserContext';
import Home from './components/Home';

function App() {
  return (
    <main>
      <UserContextProvider>
        <Home />
      </UserContextProvider>
    </main>
  );
}

export default App;
