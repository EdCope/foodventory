import React, {useContext} from 'react';
import { ListIngredients } from "../components/listIngredients";
import { SearchRecipe } from '../components/searchReceipe';
import GlobalState from '../contexts/GlobalState';
import { useProtected } from '../hooks/verifyLogin';

export const Pantry = () => {
  const [state, setState] = useContext(GlobalState);
  
  useProtected();
  
  return (
    <>
     <h1>My Pantry</h1>
     <ListIngredients />
     <SearchRecipe />
    </>
  )
};
