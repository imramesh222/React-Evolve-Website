import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RatingStar from "../components/RatingStar";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

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
  });

  return (
    <>
      <div className="container">
        <div className="d-md-flex justify-content-evenly">
          <div className="col-md-4">
            {<img src={product.image} alt={product.title} width="100%" />}
          </div>
          <div className="col-md-6">
            <Link to={"/"}>Home</Link>/
            <Link to={"products"}>products</Link>/
            <span><Link className="text-secondary">{product.title}</Link></span>

            <h2 className="m-0">{product.title}</h2>
            <small className="text-secondary">{product.category}</small>

            <p className="fw-bold my-3">
              <span className="text-success">Price : </span>${product.price}
            </p>

            <p className="fw-bold m-0">Quantity</p>
            
            <div className="d-flex border rounded w-25">
              <button className="btn btn-secondary fw-bold border-0 me-2">
                -
              </button>
              <input
                type="text"
                className="form-control text-center border-0" defaultValue={1}
              />
              <button className="btn btn-secondary fw-bold border-0 me-2">
                +
              </button>
            </div>
            <div className="d-flex justify-content-between my-3">
              <button className="btn btn-warning">Add to cart</button>
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




// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const ProductDetail = () => {
//   const [product,setProduct]=useState({})

//   const params=useParams();

//   useEffect(()=>{
//     const pid=params.product_id;
//   })

//   return (
//     <>
      
//     </>
//   )
// }

// export default ProductDetail
