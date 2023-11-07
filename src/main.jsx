import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Community from './Components/Community/Community.jsx'
import './index.css'
import { BrowserRouter,  Routes, Route, Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path = "/"
          element = {<App/>}
        />
        <Route
          path = "/community"
          element = {<Community/>}
        />

      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
)
