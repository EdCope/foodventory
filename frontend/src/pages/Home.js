import React, {useContext, useEffect} from 'react';
import GlobalState from '../contexts/GlobalState';
import { useNavigate } from "react-router";

export const Home = () => {
  const [state, setState] = useContext(GlobalState);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userdata'))
    if(user){
      setState(state => ({...state, loggedIn: user.auth}));
    }
    if(state.loggedIn){
      navigate('/Pantry');
    }
  }, [])

  
  return (
    <>
    <div className='center mt-5 pt-5'>
    <h1>PantryPal</h1>
     <h2>Powered by us, made by you!</h2>

     <h4>{state.loggedIn}</h4>
    </div>

    </>
  )
};
