import React from 'react';
/* import './App.css'; */
import './scss/index.scss';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="app"> 
      <h1>Sistema de rutas basicas</h1>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact}/>
    </div>
    </Router> 
  );
}
//componentes
function Home(){
  return <h2>Estamos en el componente home..</h2>
}
function Contact(){
  return <h2>Componente contacto!!</h2>
}
function User(){
  return <h2>Estamos en el componente Users</h2>
}
export default App;
