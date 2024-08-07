import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import Loginpage from "./pages/Loginpage";
import Productpage from "./pages/Productpage";
import Singnuppage from "./pages/Singnuppage";
import Counter from "./hook/Counter";
import ProductDetail from "./pages/ProductDetail";
import CheckOutPage from "./pages/CheckOutPage";
import CartPage from "./pages/CartPage";
import Demo_productPage from "./Demo pages/Demo_productPage";

import NewCart from "./redux/NewCart";

const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />

            <Route path="cart" element={<CartPage />} />
            <Route path="product" element={<Productpage />} />

            <Route
              path="product/productdetails/:product_id"
              element={<ProductDetail />}
            />
            <Route path="checkout" element={<CheckOutPage />} />
            <Route path="/profile" element={<Demo_productPage />} />
          </Route>
          <Route path="signup" element={<Singnuppage />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="counter" element={<Counter />} />
          <Route path="redux" element={<NewCart />} />
        </Routes>
      </Router>
    </>
  );
};

export default Myroute;
