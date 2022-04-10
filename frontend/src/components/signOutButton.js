import React from 'react';
import './signOutButton.css'
import { useNavigate } from "react-router";
import { Outlet, Link } from "react-router-dom";

export const SignOutButton = () => {
  const navigate = useNavigate();

  const signOutHandler = (e) => {
    localStorage.clear("userdata");
    navigate('/login')
  }

  return (
    <div>
      <button className="btn btn-link" type='submit' id="sign-out-button" onClick={signOutHandler}>Logout</button>
    </div>
  )
}