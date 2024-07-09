// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify"; // Importing toast for notifications
// import "react-toastify/dist/ReactToastify.css"; // Importing Toastify CSS

// const CartPage = () => {
//   const [cart, setCart] = useState([]); // Initializing cart state as an empty array

//   // useEffect to fetch cart items from localStorage on component mount
//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // Retrieve and parse cart items from localStorage, or use an empty array if null
//     setCart(cartItems); // Set the retrieved items to the cart state
//   }, []); // Empty dependency array ensures this effect runs only once on mount

//   // Function to delete an item from the cart
//   const deleteItem = (id, title) => {
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")); // Retrieve and parse current cart items from localStorage
//     let filteredCart = cartItems.filter((item) => item.id !== id); // Filter out the item with the specified id

//     setCart(filteredCart); // Update the cart state with the filtered items
//     localStorage.setItem("cartItems", JSON.stringify(filteredCart)); // Update localStorage with the new cart items
//     toast.success(
//       `${title} is removed from the cart and local storage is updated`
//     ); // Display a success message
//   };

//   // Function to update the quantity of an item in the cart
//   const updateQuantity = (id, quantity) => {
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")); // Retrieve and parse current cart items from localStorage
//     const updatedCart = cartItems.map(
//       (item) => (item.id === id ? { ...item, quantity: quantity } : item) // Update the quantity of the matching item
//     );

//     setCart(updatedCart); // Update the cart state with the new quantities
//     localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Update localStorage with the new cart items
//   };

//   return (
//     <>
//       <div className="d-flex">
//         <div className="col-9 px-2">
//           {/* Table to display cart items */}
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
//                   <td className="d-flex justify-content-center">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       width="100px"
//                       height="100px"
//                     />{" "}
//                     {/* Display product image */}
//                   </td>
//                   <td>{item.title.slice(0, 15)}</td>{" "}
//                   {/* Display product title */}
//                   <td>{item.price}</td> {/* Display product price */}
//                   <td>
//                     {/* Input to update product quantity */}
//                     <input
//                       type="number"
//                       value={item.quantity}
//                       onChange={(e) =>
//                         updateQuantity(item.id, parseInt(e.target.value))
//                       }
//                     />
//                   </td>
//                   <td>{item.quantity * item.price}</td>{" "}
//                   {/* Display total price for the item */}
//                   <td>
//                     {/* Button to delete an item from the cart */}
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
//           {/* Displaying cart summary */}
//           <h1>Cart Summary</h1>
//           <p>
//             Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}
//           </p>{" "}
//           {/* Total number of items */}
//           <p>
//             Total Price: $
//             {cart
//               .reduce((acc, item) => acc + item.quantity * item.price, 0)
//               .toFixed(2)}
//           </p>{" "}
//           {/* Total price of items */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartPage; // Exporting the CartPage component
