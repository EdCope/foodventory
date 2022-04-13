import React, {useContext, useEffect} from 'react';
import GlobalState from '../contexts/GlobalState';
import { useNavigate } from "react-router";
import './Home.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
    </div>
      <div className='row' id='homepage-buttons'>
        <div className='col 6'>
          <Link to="/login">
            <Button id='login-button' className='float-right' variant="outline-light" size="lg">
              Log in
            </Button>
          </Link>
        </div>
        <div className='col 6'>
          <Link to="/signup">
            <Button id='signup-button' variant="outline-light" size="lg">
              Sign up
            </Button>
          </Link>
    </div>
    </div>
     <h4>{state.loggedIn}</h4>

    </>
  )
};
