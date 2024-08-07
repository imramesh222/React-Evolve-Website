import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
