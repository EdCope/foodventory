import React, {useContext, useEffect} from 'react';
import GlobalState from '../contexts/GlobalState';
import { useNavigate } from "react-router";
import { LoginForm } from '../components/loginForm';


export const Login = () => {
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
  }, [state.loggedIn])

  return <LoginForm />
}