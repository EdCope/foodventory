import { Outlet, Link } from "react-router-dom";
import { SignOutButton } from "../components/signOutButton";
import GlobalState from '../contexts/GlobalState';
import React, { useContext } from 'react';

export const Layout = () => {
  const [state, setState] = useContext(GlobalState);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4>
            Pantrypal
          </h4>
          <h5>
            Powered by us, made by you!
          </h5>
          <Link to="/">Home</Link>
          <br/>
          {!state.loggedIn && <Link to="/signup">Sign Up</Link>}
          <br/>
          {!state.loggedIn && <Link to="/login">Login</Link>}
          <br/>
          {state.loggedIn && <Link to="/pantry">My Pantry</Link>}
          <br/>
          {state.loggedIn && <Link to="/favourites">Favourites</Link>}
          <br/>
          {state.loggedIn && <SignOutButton />}
          <br/>
        </div>
      </header>
      <Outlet />
    </div>
  )
}
