import React, {useContext, useEffect} from 'react';
import {SignUpForm} from '../components/signUpForm';
import GlobalState from '../contexts/GlobalState';
import { useNavigate } from "react-router";


export const Signup = () => {
  const [state, setState] = useContext(GlobalState);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userdata'))
    if(user !== null){
      setState(state => ({...state, loggedIn: user.auth}));
    }
    if(state.loggedIn){
      navigate('/mypantry');
    }
  }, [state.loggedIn])

  return <SignUpForm />
}