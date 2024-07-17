import React from "react";
import { useSelector } from "react-redux";
const NewCart = () => {
  const data = useSelector((store) => store);
  return (
    <>
      <h1>the initial cart is {data.cart}</h1>
    </>
  );
};

export default NewCart;
