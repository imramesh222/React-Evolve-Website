import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      alert("hello")
  },[params.product_id]);


  return (
    <>
     
      {product.title}<br></br>
      {<img src={product.image} alt={product.title} />
      }
    </>
  );
};

export default ProductDetail;
