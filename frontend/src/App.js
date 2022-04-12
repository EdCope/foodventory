import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Pantry } from './pages/Pantry';
import { Favourites } from './pages/Favourites';
import React, { useState } from 'react';
import GlobalState from './contexts/GlobalState';
import './App.css'

function App() {
  const user = JSON.parse(localStorage.getItem('userdata'))
  let init;
  if(!user){
    init = {loggedIn: false, token:'', uid:''}
  } else {
    init = {loggedIn: user.auth, token: user.token, uid: user.uid}
  }
  const [state, setState] = useState(init)
  return (
    <div className="background-image" 
    style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
      margin: "0px auto",
      paddingBottom: "500px",
      backgroundRepeat: "no-repeat"
    }}>
    <GlobalState.Provider value={[state, setState]}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="pantry" element={<Pantry />} />
          <Route path="favourites" element={<Favourites />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </GlobalState.Provider>
    </ div>
  );
}

export default App;
