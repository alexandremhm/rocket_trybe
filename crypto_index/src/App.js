import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './context/Provider';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Update from './pages/update/Update';

function App() {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/api/login" component={Login} />
          <Route exact path="/api/update" component={Update} />
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
