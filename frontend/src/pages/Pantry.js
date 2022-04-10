import React, {useContext, useEffect} from 'react';
import { ListIngredients } from "../components/listIngredients";
import { SearchRecipe } from '../components/searchReceipe';
import GlobalState from '../contexts/GlobalState';
import { useNavigate } from "react-router";
import axios from 'axios';

export const Pantry = () => {
  const [state, setState] = useContext(GlobalState);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userdata'))
    if(!user){
      setState(state => ({...state, loggedIn: false}));
      navigate('/');
    }
    const verifyUser = async () => {
      const data = await axios.get(`http://localhost:8000/auth/verify`,
      {headers: {'x-access-token': user.token}})
      return data.data;
    }
    verifyUser().then(res => {
      if(res.auth === false){
        localStorage.clear("userdata");
        setState(state => ({...state, loggedIn: false}));
        navigate('/');
        return res;
      }
    })
  }, [])

  
  return (
    <>
     <h1>My Pantry</h1>
     <ListIngredients />
     <SearchRecipe />
    </>
  )
};
