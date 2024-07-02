import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Product from "../components/Product";
import Card from "../components/Card";
import Productpage from "./Productpage";
import axios from "axios";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => setProducts(res.data))
    .catch(err=>console.log(err));
  return (
    <>
      <Slider />

      <div className="container py-4 ">
      <h2 className="text-success text-center">Products</h2>
      <hr />
        <div className="row row-cols-1 row-cols-md-3 g-3">
          
          {products.slice(0,3).map((product,i)=> (
            <Card item={product} key={i}/>
          ))}
        </div>
      </div>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css"
        integrity="sha512-UTNP5BXLIptsaj5WdKFrkFov94lDx+eBvbKyoe1YAfjeRPC+gT5kyZ10kOHCfNZqEui1sxmqvodNUx3KbuYI/A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css"
        integrity="sha512-OTcub78R3msOCtY3Tc6FzeDJ8N9qvQn1Ph49ou13xgA9VsH9+LRxoFU6EqLhW4+PKRfU+/HReXmSZXHEkpYoOA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
    </>
  );
};

export default Homepage;
