import React, { useState } from 'react';
import axios from 'axios';
import { ConfirmationMessage } from './confirmationMessage';

export const LoginForm = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('');
  
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
        setEmail('');
        setPassword('')
        setMessage(res.data.message);
      })
  }

  return (
    <div>
      <h2>Login</h2>
        <form id="login" onSubmit={submitHandler}> 
          <input type="email" id="email-form" placeholder="E mail" value={email} onChange={handleChange}></input>
          <input type="password" id="password-form" placeholder="Password" value={password} onChange={handleChange}></input>
          <button type='submit' id="login-button">Login</button>
        </form>
        <ConfirmationMessage message={message} />
    </div>
  )
}