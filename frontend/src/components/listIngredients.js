import axios from "axios";
import React, { useState, useEffect } from "react";
import { AddIngredient } from './addIngredient';
import { DeleteIngredientButton } from "./deleteButton";
import { ConfirmationMessage } from './confirmationMessage';

export const ListIngredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [message, setMessage] = useState('')
  const loadList = () => {
    axios.get(`http://localhost:8000/pantry/all`).then((res) => {
      const data = res.data;
      setIngredients( data );
    });
  };
  
  useEffect(() => {
    loadList();
  }, []);

  return (
    <div>
      <AddIngredient loadList={loadList} setMessage={setMessage} />
      <ConfirmationMessage message={message} />
      <div className="card mt-3">
      
      <div className="card-body">
        <div id="ingredients-list">
          <h5>Whats in my Pantry?</h5>
          <ul className="list-group" id="ingredientsList">
            {ingredients.map((ingredient, i) => (
              <li className="list-group-item" key={i}>
                {ingredient} < DeleteIngredientButton ingredient={ingredient} loadList={loadList} setMessage={setMessage}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
    </div>
    
  );
};
