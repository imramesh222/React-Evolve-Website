import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'


const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>} >
          <Route index element={<Homepage/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default Myroute
