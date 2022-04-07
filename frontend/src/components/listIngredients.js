import axios from "axios";
import React, { useState, useEffect } from "react";
import { AddIngredient } from './addIngredient';


export const ListIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

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
      <AddIngredient loadList={loadList} />
      <div className="card mt-3">
      
      <div className="card-body">
        <div id="ingredients-list">
          <h5>Whats in my Pantry?</h5>
          <ul className="list-group" id="ingredientsList">
            {console.log('the ingredients array is: ',ingredients)}
            {ingredients.map((ingredient, i) => (
              <li className="list-group-item" key={i}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
    </div>
    
  );
};
