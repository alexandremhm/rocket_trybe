import React from 'react';
import './App.css';
import { Redirect, Switch, Route,  BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './context/Provider';
import Login from './pages/login/Login';
import CryptoBtc from './pages/btc/CryptoBtc';


function App() {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/api/login" />
          </Route>
          <Route exact path="/api/login" component={Login} />
          <Route exact path="/api/cryto/btc" component={CryptoBtc} />
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
