import React from "react";
import { useDispatch } from "react-redux";

const CartItems = () => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch({ type: "AddToCart" });
  };

  const remove = () => {
    dispatch({ type: "RemoveFromCart" });
  };
  return (
    <>
      <button className="btn btn-primary" onClick={add}>
        Add
      </button>
      <button className="btn btn-primary" onClick={remove}>
        Remove
      </button>
    </>
  );
};

export default CartItems;
