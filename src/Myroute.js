import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import Loginpage from './pages/Loginpage'
import Productpage from './pages/Productpage'
import Singnuppage from './pages/Singnuppage'


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
          <Route path='signup' element={<Singnuppage/>}/>
          <Route path='login' element={<Loginpage/>}/>

          
        </Routes>
      </Router>
    </>
  )
}

export default Myroute
