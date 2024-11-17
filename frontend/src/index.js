import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing from 'react-dom/client' instead of 'react-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Using createRoot()
root.render(<App />);
