import React, {useContext, useEffect} from 'react';
import { ListIngredients } from "../components/listIngredients";
import { SearchRecipe } from '../components/searchReceipe';
import GlobalState from '../contexts/GlobalState';

export const Home = () => {
  const [state, setState] = useContext(GlobalState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userdata'))
    setState(state => ({...state, loggedIn: user.auth}));
  }, [state.loggedIn])

  
  return (
    <>
     <h1>Landing Page</h1>
     <h4>{state.loggedIn}</h4>
    </>
  )
};
