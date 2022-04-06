import React, { useState } from 'react';
import axios from 'axios';
import { ConfirmationMessage } from './confirmationMessage'

export const SignUp = () => {
  
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');
  
  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const postData = { email }
    axios.post(`http://localhost:8000/user/`, postData ).then((res) => {
        console.log(res);
        setEmail('');
        setMessage(res.data.message);
      })
  }

  return (
    <div>
      <h2>Sign Up</h2>
        <form id="sign-up" onSubmit={submitHandler}> 
          <input type="email" id="email-form" placeholder="E mail" value={email} onChange={handleChange}></input>
          <button type='submit' id="sign-up-button">Sign up</button>
        </form>
        <ConfirmationMessage message={message} />
    </div>
  )
}