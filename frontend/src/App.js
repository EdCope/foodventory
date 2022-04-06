import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Layout} from './pages/Layout'
import {Home} from './pages/Home'
import {Signup} from './pages/Signup'
import {Login} from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
