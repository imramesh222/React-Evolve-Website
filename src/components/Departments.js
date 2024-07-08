import React from "react";

const Departments = () => {
  return (
    <>
      <div className="col-2 p-2 bg-light">
        <h3>All depratments</h3>
        <p className="text-primary">See all</p>
        <hr />
        <div className="mb-2">
          <input type="checkbox" className="me-1" />
          <label>Books</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="me-1" />
          <label>Electronics</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="me-1" />
          <label>cars</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="me-1" />
          <label>Clothes</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" className="me-1" />
          <label>Books</label>
        </div>
      </div>
    </>
  );
};

export default Departments;
