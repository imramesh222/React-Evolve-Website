// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   const handleDelete = (index) => {
//     const updatedCartItems = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//   };

//   return (
//     <div className="container my-4">
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {cartItems.length > 0 ? (
//         <>
//           <table className="table table-striped">
//             <thead>
//               <tr>
//                 <th scope="col">Image</th>
//                 <th scope="col">Title</th>
//                 <th scope="col">Quantity</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Total</th>
//                 <th scope="col">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, index) => (
//                 <tr key={index}>
//                   <td>
//                     <img src={item.image} alt={item.title} width="100px" height="100px" />
//                   </td>
//                   <td>{item.title.slice(0,10)}..</td>
//                   <td>{item.quantity}</td>
//                   <td>${item.price.toFixed(2)}</td>
//                   <td>${(item.price * item.quantity).toFixed(2)}</td>
//                   <td>
//                     <button className="btn btn-danger" onClick={() => handleDelete(index)}>X</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="d-flex justify-content-between align-items-center">
//             <h4>Total Price: ${getTotalPrice()}</h4>
//             <Link to="/checkout">
//               <button className="btn btn-success">Proceed to Checkout</button>
//             </Link>
//           </div>
//         </>
//       ) : (
//         <p className="text-center">Your cart is empty</p>
//       )}
//     </div>
//   );
// };

// export default CartPage;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(storedCartItems);
//   }, []);

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   const handleDelete = (index) => {
//     const updatedCartItems = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//   };

//   const handleQuantityChange = (index, newQuantity) => {
//     const updatedCartItems = cartItems.map((item, i) => {
//       if (i === index) {
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//   };

//   return (
//     <div className="container my-4">
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {cartItems.length > 0 ? (
//         <>
//           <table className="table table-striped">
//             <thead>
//               <tr>
//                 <th scope="col">Image</th>
//                 <th scope="col">Title</th>
//                 <th scope="col">Quantity</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Total</th>
//                 <th scope="col">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, index) => (
//                 <tr key={index}>
//                   <td>
//                     <img src={item.image} alt={item.title} width="100px" height="100px" />
//                   </td>
//                   <td>{item.title.slice(0, 10)}..</td>
//                   <td>
//                     <input
//                       type="number"
//                       min="1"
//                       value={item.quantity}
//                       onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
//                       className="form-control"
//                       style={{ width: '60px' }}
//                     />
//                   </td>
//                   <td>${item.price.toFixed(2)}</td>
//                   <td>${(item.price * item.quantity).toFixed(2)}</td>
//                   <td>
//                     <button className="btn btn-danger" onClick={() => handleDelete(index)}>X</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="d-flex justify-content-between align-items-center">
//             <h4>Total Price: ${getTotalPrice()}</h4>
//             <Link to="/checkout">
//               <button className="btn btn-success">Proceed to Checkout</button>
//             </Link>
//           </div>
//         </>
//       ) : (
//         <p className="text-center">Your cart is empty</p>
//       )}
//     </div>
//   );
// };

// export default CartPage;

// import React, { useState, useEffect, Fragment } from 'react';
// import { toast } from 'react-toastify';

// const CartPage = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem('cartItems'));
//     setCart(cartItems);
//   }, []);

//   const deleteItem=(id,title)=>{
//     let cartItems=JSON.parse(localStorage.getItem('cartItems'))
//     let filterCart=cartItems.filter((item)=>item.id!==id)

//     setCart(filterCart)
//     localStorage.setItem('cartItems',JSON.stringify(filterCart))
//     toast.success(`${title} is removed from the cart and local storage is updated`)
//   }

//   return (
//     <>
//       <div className="d-flex ">
//         <div className="col-9 px-2">
//           <table className='table table-striped'>
//             <thead>
//               <tr>
//                 <th>Product Image</th>
//                 <th>Title</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Total</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             {cart.map((item, index) => (
//               <tr key={index}>
//                 <td>
//                   <img src={item.image} alt={item.title} width="100px" height="100px" />
//                 </td>
//                 <td>
//                   {item.title}
//                 </td>
//                 <td>
//                   {item.price}</td>
//                 <td>
//                   <input type="number" value={item.quantity} />
//                 </td>
//                 <td>
//                   {item.quantity*item.price}
//                 </td>
//                 <td>
//                   <button className='btn btn-danger' onClick={() => deleteItem(index)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </table>
//         </div>
//         <div className="col-3">
//           <h1>Cart Summary</h1>

//         </div>
//       </div>
//     </>
//   );
// };

// export default CartPage;

// import React, { useState, useEffect, Fragment } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const CartPage = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCart(cartItems);
//   }, []);

//   const deleteItem = (id, title) => {
//     let cartItems = JSON.parse(localStorage.getItem('cartItems'));
//     let filteredCart = cartItems.filter((item) => item.id !== id);

//     setCart(filteredCart);
//     localStorage.setItem('cartItems', JSON.stringify(filteredCart));
//     toast.success(`${title} is removed from the cart and local storage is updated`);
//   };

//   const updateQuantity = (id, quantity) => {
//     let cartItems = JSON.parse(localStorage.getItem('cartItems'));
//     const updatedCart = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: quantity } : item
//     );

//     setCart(updatedCart);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//   };

//   return (
//     <>
//       <div className="d-flex">
//         <div className="col-9 px-2">
//           <table className="table table-striped table-bordered">
//             <thead className="thead-dark">
//               <tr>
//                 <th>Product Image</th>
//                 <th>Title</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Total</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item) => (
//                 <tr key={item.id}>
//                   <td>
//                     <img src={item.image} alt={item.title} width="100px" height="100px" />
//                   </td>
//                   <td>{item.title}</td>
//                   <td>{item.price}</td>
//                   <td>
//                     <input
//                       type="number"
//                       value={item.quantity}
//                       onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
//                     />
//                   </td>
//                   <td>{item.quantity * item.price}</td>
//                   <td>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => deleteItem(item.id, item.title)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="col-3">
//           <h1>Cart Summary</h1>
//           <p>Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
//           <p>Total Price: ${cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartPage;

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify"; // Importing toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Importing Toastify CSS

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
        <div className="col-9 px-2">
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
                <tr key={item.id}>
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
            </tbody>
          </table>
        </div>
        <div className="col-3">
          {/* Displaying cart summary */}
          <h1>Cart Summary</h1>
          <p>
            Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </p>{" "}
          {/* Total number of items */}
          <p>
            Total Price: $
            {cart
              .reduce((acc, item) => acc + item.quantity * item.price, 0)
              .toFixed(2)}
          </p>{" "}
          {/* Total price of items */}
        </div>
      </div>
    </>
  );
};

export default CartPage; // Exporting the CartPage component
