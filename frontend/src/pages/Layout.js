import { Outlet, Link } from "react-router-dom";
import { SignOutButton } from "../components/signOutButton";
import GlobalState from '../contexts/GlobalState';
import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import './Layout.css';


export const Layout = () => {
  const [state, setState] = useContext(GlobalState);

  return (
    <>
    <Navbar id="navbar-background" expand="lg">
      <Container id="basic-navbar-nav">
        <Navbar.Brand href="/home">PantryPal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            {!state.loggedIn && <Nav.Link href="/signup">Sign Up</Nav.Link>}
            {!state.loggedIn && <Nav.Link href="/login">Log in</Nav.Link>}
            {state.loggedIn && <Nav.Link href="/pantry">My Pantry</Nav.Link>}
            {state.loggedIn && <Nav.Link href="/favourites">Favourites</Nav.Link>}
            {state.loggedIn && <SignOutButton />}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
    <div  className="App">
      <header className="App-header">
        <div>
          <h4>
            Pantrypal
          </h4>
          <h5>
            Powered by us, made by you!
          </h5>
        </div>
      </header>
      <Outlet />
    </div>
    </>
  )
}
