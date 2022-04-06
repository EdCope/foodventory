import { ListIngredients } from "../components/listIngredients";
import {SearchRecipe} from '../components/searchReceipe';

export const Home = () => {
  return (
    <>
     <h1>Home</h1>
     <ListIngredients />
     <SearchRecipe />
    </>
  )
};
