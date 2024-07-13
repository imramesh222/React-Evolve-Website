import React from "react";
import { Link } from "react-router-dom";

const Demo_card = (props) => {
  const { item } = props;

  if (!item) {
    return null; // Or a loading spinner or placeholder
  }

  return (
    <>
      <div className="col px-2 g-2">
        <div className="card border-0" id="card">
          <img src={item.image} alt="product" id="img" className="pt-2" />
          <div className="card-body px-2">
            <h3 className="">{item.title.slice(0, 10)}..</h3>
            <p className="text-success fw-bold">$ {item.price}</p>
            <div className="d-flex justify-content-between">
              <Link to={`/product/productdetails/${item.id}`}>
                <button className="btn btn-primary">
                  <i className="bi bi-eye"></i> View Details
                </button>
              </Link>
              <button className="btn btn-secondary">
                <i className="bi bi-cart-plus-fill"></i> Cart
              </button>
            </div>
            <hr className="container-fluid" />
            <p className="text-secondary">Last updated at 06/03/2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo_card;
