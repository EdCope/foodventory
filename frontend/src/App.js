import logo from './logo.svg';
import './App.css';
import {ListIngredients} from './components/listIngredients';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h4>
          Pantrypal
        </h4>
        <h5>Powered by us, made by you!</h5>
        </div>
        
      </header>
      <br />
      <ListIngredients />
    </div>
  );
}

export default App;
