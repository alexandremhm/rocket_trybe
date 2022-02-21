import React from 'react';
import './App.css';
import { Switch, Route,  BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './context/Provider';
import Login from './pages/login/Login';


function App() {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route exact path="/" component={Login} />  
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
