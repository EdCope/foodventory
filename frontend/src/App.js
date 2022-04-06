import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ListIngredients} from './components/listIngredients';
import {AddIngredient} from './components/addIngredient';
import {SignUp} from './components/signUp'

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
      <SignUp />
      <br />
      <ListIngredients />
    </div>
  );
}

export default App;
