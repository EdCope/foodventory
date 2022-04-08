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

function App() {
  const [state, setState] = useState({loggedIn: false, token: '', uid: ''})
  return (
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
  );
}

export default App;
