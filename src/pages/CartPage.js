import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
  const [cart, setCart] = useState([]); // Initializing cart state as an empty array

  // useEffect to fetch cart items from localStorage on component mount
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // Retrieve and parse cart items from localStorage, or use an empty array if null
    setCart(cartItems); // Set the retrieved items to the cart state
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to delete an item from the cart
  const deleteItem = (id, title) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")); // Retrieve and parse current cart items from localStorage
    let filteredCart = cartItems.filter((item) => item.id !== id); // Filter out the item with the specified id

    setCart(filteredCart); // Update the cart state with the filtered items
    localStorage.setItem("cartItems", JSON.stringify(filteredCart)); // Update localStorage with the new cart items
    toast.success(
      `${title} is removed from the cart and local storage is updated`
    ); // Display a success message
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")); // Retrieve and parse current cart items from localStorage
    const updatedCart = cartItems.map(
      (item) => (item.id === id ? { ...item, quantity: quantity } : item) // Update the quantity of the matching item
    );

    setCart(updatedCart); // Update the cart state with the new quantities
    localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Update localStorage with the new cart items
  };

  return (
    <>
      <div className="d-flex">
        <div className="row col-12">
          <div className="col-lg-9 col-md-12 col-sm-12 px-2">
            {/* Table to display cart items */}
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Product Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="d-flex justify-content-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        width="100px"
                        height="100px"
                      />{" "}
                      {/* Display product image */}
                    </td>
                    <td>{item.title.slice(0, 15)}</td>{" "}
                    {/* Display product title */}
                    <td>{item.price}</td> {/* Display product price */}
                    <td>
                      {/* Input to update product quantity */}
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                      />
                    </td>
                    <td>{item.quantity * item.price}</td>{" "}
                    {/* Display total price for the item */}
                    <td>
                      {/* Button to delete an item from the cart */}
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteItem(item.id, item.title)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className="text-center">
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td>
                    {cart.reduce((initial, item) => initial + item.quantity, 0)}
                  </td>
                  <td>
                    {cart
                      .reduce(
                        (initial, item) => initial + item.quantity * item.price,
                        0
                      )
                      .toFixed(2)}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center col-lg-3 col-md-12 col-sm-12 text-center">
            {/* Displaying cart summary */}
            <h1>Cart Summary</h1>
            <p>
              Total Items:{" "}
              {cart.reduce((initial, item) => initial + item.quantity, 0)}
            </p>
            {/* Total number of items */}
            <p>
              Total Price: $
              {cart
                .reduce(
                  (initial, item) => initial + item.quantity * item.price,
                  0
                )
                .toFixed(2)}
            </p>
            {/* Total price of items */}
            <button className="btn btn-success w-50">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
