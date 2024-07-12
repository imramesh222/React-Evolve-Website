import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-lg-3 mb-2 mb-lg-0 list-unstyled">
            <li className="nav-item me-5">
              <Link to='/' className='nav-link text-white'>
                <h1>Home</h1>
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to='/product' className='nav-link text-white'>
                <h1>Products</h1>
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to='/cart' className='nav-link text-white'>
                <h1>Cart</h1>
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to='/contacts' className='nav-link text-white'>
                <h1>Contacts</h1>
              </Link>
            </li>
          </ul>
          <div className='d-flex'>
            <Link to='/login' className='fs-2 text-dark px-2'>
              <i className='bi bi-person-add'></i>
            </Link>
            <Link to='/signup' className='fs-2 text-dark px-2'>
              <i className='bi bi-box-arrow-in-right'></i>
            </Link>
            <Link to='/profile' className='fs-2 text-dark px-2'>
              <i className='bi bi-person-circle'></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
