import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';  // Correct path to Login.js

function App() {
  return (
    <Router> {/* Only one BrowserRouter here */}
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
