import React, {useContext, useEffect} from 'react';
import { ListIngredients } from "../components/listIngredients";
import { SearchRecipe } from '../components/searchReceipe';
import GlobalState from '../contexts/GlobalState';
import { useNavigate } from "react-router";

export const Pantry = () => {
  const [state, setState] = useContext(GlobalState);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userdata'))
    if(!user){
      setState(state => ({...state, loggedIn: false}));
      navigate('/');
    }
  }, [])

  
  return (
    <>
     <h1>My Pantry</h1>
     <ListIngredients />
     <SearchRecipe />
    </>
  )
};
