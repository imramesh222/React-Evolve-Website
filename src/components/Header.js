import React from 'react'

const Header = () => {
  return (
    <>
        <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-between ">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" ><h1>MeroPasal</h1></a>


        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-white" placeholder="Search..." aria-label="Search"/>
        </form>


      </div>
    </div>
  </header>
  <header class="p-2 bg-primary d-flex flex-wrap align-items-center justify-content-between ">
    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-between mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Products</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
    </ul>

    <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
    </div>
  </header>
      
    </>
  )
}

export default Header
