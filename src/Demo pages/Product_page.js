import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Departments from '../components/Departments'
import Card from '../components/Card'

const Product_page = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);

  useEffect(() => {

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  })

  const showMore=()=>{
    setLimit(limit+6)
  }

  const showLess=()=>{
    setLimit(12)
  }
 
  return (
    <>
      <div className="d-flex">
        
          <Departments />
        
        <div className="row col-10 row-cols-md-4 g-3 mr-4 py-2 ">
          {products.slice(0, limit).map((product, i) => (
            <Card item={product} key={i} />
          ))}
        </div>
        
      </div>
      <div className="d-flex justify-content-center">
      {limit < products.length && (
          <button className="btn btn-primary" onClick={showMore}>
            Show more
          </button>
        )}

        {limit > products.length && (
          <button className="btn btn-danger" onClick={showLess}>
            Show less
          </button>
        )}
        </div>

    </>
  )
}

export default Product_page
