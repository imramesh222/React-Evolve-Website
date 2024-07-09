import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importing Toastify CSS

const Demo_cartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(cartItems);
  }, []);

  const deleteItem = (id, title) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")); // Retrieve and parse current cart items from localStorage
    let filteredCart = cartItems.filter((item) => item.id !== id); // Filter out the item with the specified id

    setCart(filteredCart); // Update the cart state with the filtered items
    localStorage.setItem("cartItems", JSON.stringify(filteredCart)); // Update localStorage with the new cart items
    toast.success(
      `${title} is removed from the cart and local storage is updated`
    ); // Display a success message
  };

  const updateQuantity = (id, quantity) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const updatedCart = cartItems.map((item) =>
      (item.id === id ? { ...item, quantity: quantity } : item)
    );
    setCart(updatedCart);
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  

  return (
    <>
      <div className="d-flex">
        <div className="col-9 ps-4 pe-2">
          <table className="table table-bordered table-striped">
          <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Product Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title.slice(0, 15)}...</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      height={"auto"}
                      width={"80px"}
                    />
                  </td>
                  <td>$ {item.price}</td>
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
                  <td>$ {item.price * item.quantity}</td>
                  <td>
                    {
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteItem(item.id, item.title)}
                      >
                        Delete
                      </button>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3">
          <h1>Cart History</h1>
          <p> Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
          <p>Total Price: {cart.reduce((price,item)=>price+item.quantity*item.price,0)}</p>
          <button className="btn btn-success">Check Out</button>
        </div>
      </div>
    </>
  );
};

export default Demo_cartPage;
