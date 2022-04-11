import { useNavigate } from "react-router";
import GlobalState from '../contexts/GlobalState';
import React, {useContext, useEffect} from 'react';
import axios from 'axios';

export const useProtected = () => {
  const [state, setState] = useContext(GlobalState);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userdata'))
    if(!user){
      setState(state => ({...state, loggedIn: false}));
      navigate('/');
    } else {
      const verifyUser = async () => {
        const data = await axios.get(`http://localhost:8000/auth/verify`,
        {headers: {'x-access-token': user.token}})
        return data.data;
      }
      verifyUser().then(res => {
        if(res.auth === false){
          localStorage.clear("userdata");
          setState(state => ({...state, loggedIn: false}));
          navigate('/');
          return res;
        }
      })
    }
  }, [])

  return state.loggedIn;

}