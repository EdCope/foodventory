import React, {useContext, useEffect} from 'react';
import GlobalState from '../contexts/GlobalState';
import { useNavigate } from "react-router";
import {LoginForm} from '../components/loginForm';

export const Login = () => {
  const [state, setState] = useContext(GlobalState);
  const navigate = useNavigate();

  useEffect(() => {
    if(state.loggedIn){
      navigate('/');
    }
  }, [state.loggedIn])

  return <LoginForm />
}