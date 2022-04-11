import React from 'react';
import './signOutButton.css'
import { useNavigate } from "react-router";

export const SignOutButton = () => {
  const navigate = useNavigate();

  const signOutHandler = (e) => {
    localStorage.clear("userdata");
    navigate('/login')
  }

  return (
    <>
      <button className="btn btn-link" type='submit' id="sign-out-button" onClick={signOutHandler}>Logout</button>
    </>
  )
}