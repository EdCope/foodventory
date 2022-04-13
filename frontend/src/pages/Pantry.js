import React, {useContext, useState, useEffect} from 'react';
import { ListIngredients } from "../components/listIngredients";
import { SearchRecipe } from '../components/searchRecipe';
import GlobalState from '../contexts/GlobalState';
import { useProtected } from '../hooks/verifyLogin';
import './Pantry.css';

import { ConfirmationMessage } from '../components/confirmationMessage';
import axios from "axios";

export const Pantry = () => {
  const [state, setState] = useContext(GlobalState);
  
  useProtected();

  const [ingredients, setIngredients] = useState([]);
  const [message, setMessage] = useState('')


  const loadList = () => {
    const user = JSON.parse(localStorage.getItem('userdata'))
    if(user){
      axios.get(`/pantry/all/${user.uid}`).then((res) => {
      const data = res.data;
      console.log(data)
      setIngredients( data );
    });
    }
  };


  
  useEffect(() => {
    loadList();
  }, []);
  
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
        <div id='instruction' className='card center vertical-align pt-1'><h5>Welcome to PantryPal! To get started add the contents of your pantry, select the ingredients and search for a recipe!</h5></div>
        </div>
      </div>
      <ConfirmationMessage message={message} />
      <div className='row'>
        <div className='col-sm-5 col-12 '><ListIngredients ingredients={ingredients} loadList={loadList} setMessage={setMessage}/></div>
        <div className='col-sm-7 col-12 '><SearchRecipe setMessage={setMessage} /></div>
      
      
      </div>
    </div>
  )
};
