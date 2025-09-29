import { StrictMode } from 'react' // lets you check for extra bugs during development
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; // For routing between pages
import './index.css'
import './App.css'
import './style.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
);