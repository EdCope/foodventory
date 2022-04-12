

import { DeleteIngredientButton } from "./deleteButton";
import { AddIngredient } from '../components/addIngredient';


export const ListIngredients = (props) => {


  return (
    <div className="card mt-3">
        <div className="card-header">
        <AddIngredient loadList={props.loadList} setMessage={props.setMessage} />
        </div>
      
      <div className="card-body">
        <div id="ingredients-list">
          <h5>Whats in my Pantry?</h5>
          <ul className="list-group" id="ingredientsList">
            <li className="list-group-item">
              <div className="row">
                  <div className="col-3">
                  <strong>Select</strong>
                  </div>
                  <div className="col-5">
                  <strong>Ingredient</strong>
                  </div>
                  <div className="col-4">
                  <strong>Remove</strong>
                  </div>
                </div>

            </li>
            {props.ingredients.map((ingredient) => (
              <li className="list-group-item" key={ingredient._id}>
                <div className="row">
                  <div className="col-3">
                  <input type="checkbox" name="checkbox" id="pickIngredient" value={ingredient.name}></input>
                  </div>
                  <div className="col-5">
                  {ingredient.name}
                  </div>
                  <div className="col-4">
                  < DeleteIngredientButton ingredient={ingredient} loadList={props.loadList} setMessage={props.setMessage}/>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    
  );
};
