import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './pages/Layout';
import Loginpage from './pages/Loginpage';
import Productpage from './pages/Productpage';
import Singnuppage from './pages/Singnuppage';
import Counter from './hook/Counter';
import ProductDetail from './pages/ProductDetail';
import Product_page from './Demo pages/Product_page';

import CheckOutPage from './pages/CheckOutPage';
import Demo_cartPage from './Demo pages/Demo_cartPage';
import CartPage from './pages/CartPage';

const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='login' element={<Loginpage />} />
            <Route path='cart' element={<CartPage/>} />
            <Route path='product' element={<Productpage />} />
            <Route path='signup' element={<Singnuppage />} />
            <Route path='login' element={<Loginpage />} />
            <Route path='product/productdetails/:product_id' element={<ProductDetail />} />
            <Route path='checkout' element={<CheckOutPage />} />
            <Route path='demo_product' element={<Product_page />} />
          </Route>
          <Route path='counter' element={<Counter />} />
        </Routes>
      </Router>
    </>
  );
};

export default Myroute;
