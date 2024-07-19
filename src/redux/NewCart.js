import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const NewCart = () => {
  const data = useSelector((store) => store.studentReducer);
  return (
    <>
      <h1>the initial cart is {data.name}</h1>
      <CartItems />
    </>
  );
};

export default NewCart;
