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
        <Navbar.Brand id="pantrypal-brand" href="/">PantryPal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            {!state.loggedIn && <Nav.Link id="Sign-up" href="/signup">Sign Up</Nav.Link>}
            {!state.loggedIn && <Nav.Link id="Log-in" href="/login">Log in</Nav.Link>}
            {state.loggedIn && <Nav.Link id="My-pantry" href="/pantry">My Pantry</Nav.Link>}
            {state.loggedIn && <Nav.Link id="Favourites" href="/favourites">Favourites</Nav.Link>}
            {state.loggedIn && <SignOutButton />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin='anonymous'></script>

    <div className="App m-3 p-3" id="App">
      <header className="App-header">
        {/* <div>
          <h4>
            Pantrypal
          </h4>
          <h5>
            Powered by us, made by you!
          </h5>
        </div> */}
      </header>
    </div>
    <Outlet />
    </>
  )
}
