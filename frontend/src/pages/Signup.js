import React, {useContext, useEffect} from 'react';
import {SignUpForm} from '../components/signUpForm';
import GlobalState from '../contexts/GlobalState';
import { useNavigate } from "react-router";


export const Signup = () => {
  const [state, setState] = useContext(GlobalState);
  const navigate = useNavigate();

  useEffect(() => {
    if(state.loggedIn){
      navigate('/');
    }
  }, [state.loggedIn])

  return <SignUpForm />
}