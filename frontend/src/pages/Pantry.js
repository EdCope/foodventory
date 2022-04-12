import React, {useContext, useState, useEffect} from 'react';
import { ListIngredients } from "../components/listIngredients";
import { SearchRecipe } from '../components/searchReceipe';
import GlobalState from '../contexts/GlobalState';
import { useProtected } from '../hooks/verifyLogin';

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
    <div className='container-fluid'>
      <ConfirmationMessage message={message} />
      <div className='row'>
        <div className='col-sm-5 col-12 '><ListIngredients ingredients={ingredients} loadList={loadList} setMessage={setMessage}/></div>
        <div className='col-sm-7 col-12 '><SearchRecipe setMessage={setMessage} /></div>
      
      
      </div>
    </div>
  )
};
