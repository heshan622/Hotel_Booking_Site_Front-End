import React from 'react'
import ReactDOM from 'react-dom/client'   // <-- correct import for createRoot
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
