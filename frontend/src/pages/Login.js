import React, {useContext, useEffect} from 'react';
import GlobalState from '../contexts/GlobalState';
import { useNavigate } from "react-router";
import {LoginForm} from '../components/loginForm';

export const Login = () => {
  const [state, setState] = useContext(GlobalState);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(state.loggedIn)
    const user = JSON.parse(localStorage.getItem('userdata'))
    if(user !== null){
      setState(state => ({...state, loggedIn: user.auth}));
    }
    if(state.loggedIn){
      navigate('/Pantry');
    }
  }, [state.loggedIn])

  return <LoginForm />
}