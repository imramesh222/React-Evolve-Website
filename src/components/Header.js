import React from "react";

const Header = () => {
  return (
    <div className="bg-dark">
      <div className="container p-3 text-bg-dark">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-between justify-content-md-start align-items-center mb-2 mb-md-0">
            <a
              href="/"
              className="d-flex align-items-center text-white text-decoration-none"
            >
              <h1>MyPasal</h1>
            </a>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-between justify-content-md-end align-items-center">
            <form
              className="d-flex w-100"
              role="search"
              aria-label="Search form"
            >
              <input
                type="search"
                className="form-control form-control-dark me-2"
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
    </div>
  );
};

export default Header;
