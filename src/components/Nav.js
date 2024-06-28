import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
         
    <div className='bg-secondary sticky-top'>
    <div className='d-flex p-2 justify-content-between text-bg-secondary '>

      <div className='nav-items d-flex justify-content-around w-50'>
          <a href='#' className='nav-link d-flex align-items-center text-decoration-none mb-lg-0 active'><h1>Home</h1></a>
          <a href='#' className='nav-link d-flex align-items-center text-decoration-none'><h1>Products</h1></a>
         <a href='#' className='nav-link d-flex align-items-center text-decoration-none'><h1>Services</h1></a>
          <a href='#' className='nav-link d-flex align-items-center text-decoration-none'><h1>Contacts</h1></a>
       </div>

        <div className='d-flex justify-content-centre px-2'>
        <Link to={'login'}><a href='#' className='fs-2 text-dark px-1'><i class="bi bi-person-add"></i></a></Link> 
         <a href='#' className='fs-2 text-dark px-1'><i class="bi bi-box-arrow-in-right"></i></a>
         <a href='#' className='fs-2 text-dark px-1'><i class="bi bi-person-circle"></i></a>
       </div>
   </div>
 </div>
  )
}

export default Nav
