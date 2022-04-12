import React from 'react';
import './signOutButton.css'
import { useNavigate } from "react-router";
import { Nav } from 'react-bootstrap';

export const SignOutButton = () => {
  const navigate = useNavigate();

  const signOutHandler = (e) => {
    localStorage.clear("userdata");
    navigate('/login')
  }

  return (
    <>
    <Nav.Link id="Favourites" onClick={signOutHandler}>Log out</Nav.Link>
      {/* <button className="btn btn-link float-right" type='submit' id="sign-out-button" onClick={signOutHandler}>Logout</button> */}
    </>
  )
}