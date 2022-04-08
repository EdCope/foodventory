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
  }, [state.loggedIn])

  
  return (
    <>
     <h1>Landing Page</h1>
     <h4>{state.loggedIn}</h4>
    </>
  )
};
