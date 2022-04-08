import axios from "axios";
import React, { useState, useEffect } from "react";
import { AddIngredient } from './addIngredient';
import { DeleteIngredientButton } from "./deleteButton";
import { ConfirmationMessage } from './confirmationMessage';

export const ListIngredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [message, setMessage] = useState('')
  const loadList = () => {
    const user = JSON.parse(localStorage.getItem('userdata'))
    if(user){
      axios.get(`http://localhost:8000/pantry/all/${user.uid}`).then((res) => {
      const data = res.data;
      setIngredients( data );
    });
    }
  };
  
  useEffect(() => {
    loadList();
  }, []);

  return (
    <div>
      <AddIngredient loadList={loadList} setMessage={setMessage} />
      <br></br>
      <ConfirmationMessage message={message} />
      <div className="card mt-3">
      
      <div className="card-body">
        <div id="ingredients-list">
          <h5>Whats in my Pantry?</h5>
          <ul className="list-group" id="ingredientsList">
            <li className="list-group-item">
              <div className="row">
                  <div className="col-2">
                  <strong>Select</strong>
                  </div>
                  <div className="col-8">
                  <strong>Ingredient</strong>
                  </div>
                  <div className="col-2">
                  <strong>Remove</strong>
                  </div>
                </div>

            </li>
            {ingredients.map((ingredient) => (
              <li className="list-group-item" key={ingredient._id}>
                <div className="row">
                  <div className="col-2">
                  <input type="checkbox" name="checkbox" id="pickIngredient" value={ingredient.name}></input>
                  </div>
                  <div className="col-8">
                  {ingredient.name}
                  </div>
                  <div className="col-2">
                  < DeleteIngredientButton ingredient={ingredient} loadList={loadList} setMessage={setMessage}/>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
    </div>
    
  );
};
