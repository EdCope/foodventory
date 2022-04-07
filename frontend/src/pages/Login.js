import React, {useContext, useEffect} from 'react';
import {LoginForm} from '../components/loginForm';
import GlobalState from '../contexts/GlobalState';

export const Login = () => {
  const [state, setState] = useContext(GlobalState);

  useEffect(() => {
    setState(state => ({...state, loggedIn: false}));
  }, [state.loggedIn])

  return <LoginForm />
}