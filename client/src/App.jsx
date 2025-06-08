import React from 'react'
import  Navbar from './components/Navbar.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'

const App = () => {

  const location = useLocation()
  const isOwnerPath = location.pathname.includes('owner')


  return (
    <div>      
      {!isOwnerPath && <Navbar />}  
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
