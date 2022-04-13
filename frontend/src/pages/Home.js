import React, {useContext, useEffect} from 'react';
import GlobalState from '../contexts/GlobalState';
import { useNavigate } from "react-router";
import './Home.css'

export const Home = () => {
  const [state, setState] = useContext(GlobalState);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userdata'))
    if(user){
      setState(state => ({...state, loggedIn: user.auth}));
    }
    if(state.loggedIn){
      navigate('/mypantry');
    }
  }, [])

  
  return (
    <>
    <div  className='center mt-5 pt-5'>
    <p id='landingPage'>PantryPal</p>
    <p id='slogan'>Powered by us, made by you!</p>
    <img src="pantrypal-logo.PNG" alt="pantrypal-logo" id="logo-home" width="300"></img>

     <h4>{state.loggedIn}</h4>
    </div>

    </>
  )
};
