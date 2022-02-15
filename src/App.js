import React from 'react';
import './App.css';
import Header from './common/Header';
import Repository from './pages/Repository';
import Dashboard from './pages/Dashboard';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Footer from './common/Footer';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/repo" element={<Repository />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
