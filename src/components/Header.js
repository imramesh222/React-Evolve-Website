import React from "react";

const Header = () => {
  return (
    <div className="bg-dark ">
      <div className=" container  p-3 text-bg-dark ">
        <div className="d-flex justify-content-between align-items-center flex-wrap px-5">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <h1>MyPasal</h1>
          </a>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
            aria-label="Search form"
          >
            <input
              type="search"
              className="form-control-dark mr-2"
              aria-label="Search"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="btn btn-outline-light"
              aria-label="Submit search"
            >
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
