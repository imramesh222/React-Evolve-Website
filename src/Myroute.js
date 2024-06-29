import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import Loginpage from './pages/Loginpage'
import Productpage from './pages/Productpage'


const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>} >
          <Route index element={<Homepage/>}/>
          </Route>
          <Route path='login' element={<Loginpage/>}/>
          <Route path='product' element={<Productpage/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default Myroute
