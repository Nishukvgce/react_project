import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Import App component

// Select the root element
const rootElement = document.getElementById("root");

// Use createRoot to render the app
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
