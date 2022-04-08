import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { ConfirmationMessage } from './confirmationMessage';
import GlobalState from '../contexts/GlobalState';

export const LoginForm = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('');
  const [state, setState] = useContext(GlobalState);
  
  const handleChange = (e) => {
    if (e.target === document.getElementById('password-form')) {
      setPassword(e.target.value)
    } else {
      setEmail(e.target.value)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const postData = { email: email, password: password }
    axios.post(`http://localhost:8000/auth/`, postData ).then((res) => {
        console.log(res);
        const {auth, token, uid} = res.data;
        if(auth){
          localStorage.setItem("userdata",JSON.stringify(res.data))
          setState(state => ({...state, loggedIn: true, token: token, uid: uid}));
        }
        setEmail('');
        setPassword('')
        setMessage(res.data.message);
      })
  }

  return (
<div className="container">
      <div className="row">
        <div className="col-3"></div>

        <div className="col-6">

        <h2>Log In</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email-form">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email-form"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password-form">Password</label>
          <input
            type="password"
            className="form-control"
            id="password-form"
            value={password}
            onChange={handleChange}

          ></input>
        </div>
        <button className="btn btn-primary" type="submit" id="sign-up-button">
          Log In
        </button>
      </form>
        </div>

        <div className="col-3"></div>
      </div>

      <ConfirmationMessage message={message} />
    </div>
  )
}