import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './context/AppProvider';


function App() {
  return (
    <Router>
      <AppProvider>
        <Switch>          
          ola
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
