import { Outlet } from "react-router-dom";
import { SignOutButton } from "../components/signOutButton";
import GlobalState from '../contexts/GlobalState';
import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './Layout.css';


export const Layout = () => {
  const [state, setState] = useContext(GlobalState);

  return (
    <>
    <Navbar expand="lg">
      <Container id="basic-navbar-nav">
      <img id="brand-logo" src="pantrypal-logo-black.png" alt="pantrypal-logo" width="50" height="50"></img>
        <Navbar.Brand id="pantrypal-brand" href="/">PantryPal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            {!state.loggedIn && <Nav.Link id="Sign-up" href="/signup">Sign Up</Nav.Link>}
            {!state.loggedIn && <div class="vl"></div> }
            {!state.loggedIn && <Nav.Link id="Log-in" href="/login">Log in</Nav.Link>}
            {state.loggedIn && <Nav.Link id="My-pantry" href="/mypantry">My Pantry</Nav.Link>}
            {state.loggedIn && <div class="vl"></div> }
            {state.loggedIn && <Nav.Link id="Favourites" href="/favourites">Favourites</Nav.Link>}
            {state.loggedIn && <div class="vl"></div> }
            {state.loggedIn && <SignOutButton />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin='anonymous'></script>

    <Outlet />
    </>
  )
}
