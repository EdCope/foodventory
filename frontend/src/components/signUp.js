import React, { useState } from 'react';

export const SignUp = () => {
  
  const [email, setEmail] = useState('')
  
  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <div>
      <h2>Sign Up</h2>
        <form id="sign-up" onSubmit={submitHandler}> 
          <input type="email" id="email-form" placeholder="E mail" value={email} onChange={handleChange}></input>
          <button type='submit' id="sign-up-button">Sign up</button>
        </form>
    </div>
  )
}