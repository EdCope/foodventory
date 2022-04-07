import React, {useContext, useEffect} from 'react';
import { ListIngredients } from "../components/listIngredients";
import { SearchRecipe } from '../components/searchReceipe';
import GlobalState from '../contexts/GlobalState';

export const Home = () => {
  const [state, setState] = useContext(GlobalState);

  useEffect(() => {
    setState(state => ({...state, loggedIn: false}));
  }, [state.loggedIn])

  
  return (
    <>
     <h1>Home</h1>
     <ListIngredients />
     <SearchRecipe />
    </>
  )
};
