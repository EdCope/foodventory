import React, {useContext, useEffect} from 'react';
import { ListIngredients } from "../components/listIngredients";
import { SearchRecipe } from '../components/searchReceipe';
import GlobalState from '../contexts/GlobalState';

export const Pantry = () => {
  const [state, setState] = useContext(GlobalState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userdata'))
    setState(state => ({...state, loggedIn: user.auth}));
  }, [state.loggedIn])

  
  return (
    <>
     <h1>My Pantry</h1>
     <ListIngredients />
     <SearchRecipe />
    </>
  )
};
