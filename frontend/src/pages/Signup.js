import React, {useContext, useEffect} from 'react';
import {SignUpForm} from '../components/signUpForm';
import GlobalState from '../contexts/GlobalState';

export const Signup = () => {
  const [state, setState] = useContext(GlobalState);

  useEffect(() => {
    setState(state => ({...state, loggedIn: false}));
  }, [state.loggedIn])

  return <SignUpForm />
}