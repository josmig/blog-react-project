import React from 'react';
import './scss/index.scss';
import Admin from './pages/Admin';
import SignIn from './pages/Admin/Signin';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {

  return (
    <div>
      <h1>Estamos en app.js</h1>      
      <Admin />
      <SignIn />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
