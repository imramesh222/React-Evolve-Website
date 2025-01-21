import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RatingStar from "../components/RatingStar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const params = useParams();

  useEffect(() => {
    const pid = params.product_id;

    axios
      .get(`https://fakestoreapi.com/products/${pid}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.product_id]);

  const addToCart = () => {
    // Fetching data from local storage if exists, otherwise creating an empty array
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Assigning product information in object variable
    const productItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: quantity,
      category: product.category,
    };

    // Check if product is already exists or not in local storage
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      toast.error("Product already in cart");
    } else {
      cartItems.push(productItem);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      toast.success("Product added to cart");
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <ToastContainer theme="dark" position="top-right" />
      <div className="container">
        <div className="d-md-flex justify-content-evenly">
          <div className="col-md-4">
            {<img src={product.image} alt={product.title} width="100%" />}
          </div>
          <div className="col-md-6">
            <Link to="/">Home</Link>/<Link to="/products">Products</Link>/
            <span>
              <Link className="text-secondary">{product.title}</Link>
            </span>
            <h2 className="m-0">{product.title}</h2>
            <small className="text-secondary">{product.category}</small>
            <p className="fw-bold my-3">
              <span className="text-success">Price: </span>${product.price}
            </p>
            <p className="fw-bold m-0">Quantity</p>
            <div className="d-flex border rounded w-25">
              <button
                className="btn btn-secondary fw-bold border-0 me-2"
                onClick={decrement}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="text"
                className="form-control text-center border-0"
                value={quantity}
                readOnly
              />
              <button
                className="btn btn-secondary fw-bold border-0 me-2"
                onClick={increment}
              >
                +
              </button>
            </div>
            <div className="d-flex justify-content-between my-3">
              <button className="btn btn-warning" onClick={addToCart}>
                Add to cart
              </button>
              <button className="btn btn-success">Add to wishlist</button>
            </div>
            {product.rating && <RatingStar rating={product.rating.rate} />}
            <p className="text-secondary m-0">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
