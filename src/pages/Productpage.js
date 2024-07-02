// import React, { useState } from 'react';
// import Header from '../components/Header';
// import Nav from '../components/Nav';

// const Productpage = () => {
//   const products = [
//     { id: 'p1', name: 'Product 1', image: './images/p1.jpg' },
//     { id: 'p2', name: 'Product 2', image: './images/p2.jpg' },
//     { id: 'p3', name: 'Product 3', image: './images/p3.jpg' },
//     { id: 'p4', name: 'Product 4', image: './images/p4.jpg' },
//     { id: 'p5', name: 'Product 5', image: './images/p5.jpg' },
//     { id: 'p6', name: 'Product 6', image: './images/p1.jpg' },
//     { id: 'p7', name: 'Product 7', image: './images/p3.jpg' },
//     { id: 'p8', name: 'Product 8', image: './images/p4.jpg' },
//     { id: 'p9', name: 'Product 9', image: './images/p5.jpg' },
//     { id: 'p10', name: 'Product 10', image: './images/p2.jpg' },
//     // Add more products as needed
//   ];

//   const [visibleProducts, setVisibleProducts] = useState(4);

//   const showMoreProducts = () => {
//     setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
//   };

//   return (
//     <>
//       <Header />
//       <Nav />
//       <div className="container py-4">
//         <h2 className="text-success text-center text-uppercase">Products</h2>
//         <hr />
//         <div className="row row-cols-1 row-cols-md-4 g-4">
//           {products.slice(0, visibleProducts).map((product) => (
//             <div className="col shadow p-2 rounded-3" key={product.id}>
//               <div className="card border-0">
//                 <div className="img" style={{ height: '300px', overflow: 'hidden' }}>
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     id="img"
//                     style={{ objectFit: 'cover', width: '100%', height: '100%' }}
//                   />
//                 </div>
//                 <div className="card-body">
//                   <h3>{product.name}</h3>
//                   <p className="text-success fw-bold">$ 400</p>
//                   <div className="d-flex justify-content-around">
//                     <button className="btn btn-primary">
//                       <i className="bi bi-eye"></i> View Details
//                     </button>
//                     <button className="btn btn-secondary">
//                       <i className="bi bi-cart-plus-fill"></i> Cart
//                     </button>
//                   </div>
//                   <hr className="container-fluid" />
//                   <p className="d-flex text-secondary align-items-center justify-content-end pb-3">
//                     Last updated at 06/03/2024
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {visibleProducts < products.length && (
//           <div className="d-flex justify-content-end align-items-center p-2">
//             <button
//               type="button"
//               className="btn btn-secondary d-flex"
//               onClick={showMoreProducts}
//             >
//               <i className="bi-caret-right fs-3"></i>
//               <h5 className="align-center pt-2">Show more</h5>
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Productpage;





import React, { useState } from 'react'
import Card from '../components/Card'
import Nav from '../components/Nav'
import Header from '../components/Header'
import axios from 'axios'
import Departments from '../components/Departments'

const Productpage = () => {

  const[products,setProducts]=useState([]);

  axios
  .get("https://fakestoreapi.com/products")
  .then((res)=>setProducts(res.data))
  .catch(err=>console.log(err))

  return (
    <>

    <div className="d-flex">
      <Departments/>
      <div className="row col-10 row-cols-1 row-cols-md-4 g-3 mx-2">
        
        {products.slice(0,20).map((product,i)=>
        <Card item={product} key={i}/>
        )}

      </div>
    </div>
      
    </>
  )
}

export default Productpage
