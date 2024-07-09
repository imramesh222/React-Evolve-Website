// import React, { useState, useEffect } from "react";
// import Card from "../components/Card";
// import axios from "axios";
// import Departments from "../components/Departments";

// const Productpage = () => {
//   const [products, setProducts] = useState([]);
//   const [limit, setLimit] = useState(12);
//   const [hasIncreased, setHasIncreased] = useState(false);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const showMore = () => {
//     setLimit(limit + 6);
//     setHasIncreased(true);
//   };

//   const showLess = () => {
//     setLimit(12);
//     setHasIncreased(false);
//   };

//   return (
//     <>
//       <div className="d-flex">
//         <Departments />
//         <div className="row col-10 row-cols-1 row-cols-md-4 g-3 mx-2 pt-4">
//           {products.slice(0, limit).map((product, i) => (
//             <Card item={product} key={i} />
//           ))}
//         </div>
//       </div>
//       <div className="d-flex justify-content-end">
//         {limit < products.length && (
//           <button className="btn btn-primary mx-2" onClick={showMore}>
//             Show more
//           </button>
//         )}
        
//         {/* Render "Show less" button only if the limit has been increased */}
//         {hasIncreased && (
//           <button className="btn btn-danger mx-2" onClick={showLess}>
//             Show less
//           </button>
//         )}
//       </div>
//     </>
//   );
// };

// export default Productpage;
