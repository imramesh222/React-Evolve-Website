import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='bg-secondary sticky-top'>
      <div className='d-flex p-2 justify-content-between text-bg-secondary'>
        <div className='nav-items d-flex justify-content-around w-50'>
          <Link to='/' className='nav-link d-flex align-items-center text-decoration-none mb-lg-0 px-3'>
            <h1>Home</h1>
          </Link>
          <Link to='/product' className='nav-link d-flex align-items-center text-decoration-none px-3'>
            <h1>Products</h1>
          </Link>
          <Link to='/cart' className='nav-link d-flex align-items-center text-decoration-none px-3'>
            <h1>Cart</h1>
          </Link>
          <Link to='/contacts' className='nav-link d-flex align-items-center text-decoration-none px-3'>
            <h1>Contacts</h1>
          </Link>
        </div>
        <div className='d-flex justify-content-centre px-2'>
          <Link to='login' className='fs-2 text-dark px-1'>
            <i className='bi bi-person-add'></i>
          </Link>
          <Link to='signup' className='fs-2 text-dark px-1'>
            <i className='bi bi-box-arrow-in-right'></i>
          </Link>
          <Link to='/demo_product' className='fs-2 text-dark px-1'>
            <i className='bi bi-person-circle'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
