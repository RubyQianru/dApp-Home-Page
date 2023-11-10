import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Community from './Components/Community/Community.jsx'
import NFT from './Components/NFT/NFT.jsx'
import './index.css'
import { HashRouter ,  Routes, Route, Navigate } from "react-router-dom";
import { MetaMaskProvider } from '@metamask/sdk-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MetaMaskProvider debug={false} sdkOptions={{
        checkInstallationImmediately: false,
        dappMetadata: {
          name: "Demo React App",
          url: window.location.host,
        }
      }}>
    <HashRouter>
      <Routes>
        <Route
          path = "/"
          element = {<App/>}
        />
        <Route
          path = "/community/"
          element = {<Community/>}
        />
        <Route
          path = "/NFT"
          element = {<NFT/>}
        />

      </Routes>
      
    </HashRouter>
    </MetaMaskProvider>
  </React.StrictMode>,
)
