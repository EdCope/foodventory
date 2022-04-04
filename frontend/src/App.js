import logo from './logo.svg';
import './App.css';
import {ListIngredients} from './components/listIngredients';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pantrypal
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by us, made by you!
        </a>
        <ListIngredients />
      </header>
    </div>
  );
}

export default App;
