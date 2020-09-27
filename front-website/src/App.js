import React from 'react';
import './scss/index.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from './config/routes'
import AdminHome from './pages/Admin'
function App() {

  return (
    <Router>
      <Switch>
        <Route path="/admin" exact="true" component={AdminHome}/>
      </Switch>
    </Router>
  );
}

export default App;
