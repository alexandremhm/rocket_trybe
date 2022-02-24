import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './context/Provider';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Update from './pages/update/Update';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
