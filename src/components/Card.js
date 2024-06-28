import React from 'react'

const Card = () => {
  return (
    <>
    <div className="container py-4 ">
      <h2 className='text-success '>Products</h2>
      <hr />
        <div className="row row-cols-1 row-cols-md-4 g-4 ">
            <div className="col shadow p-2 rounded-3">
              <div className="card border-0">
                <div className="img">
                <img src="./images/p1.jpg" alt="image 1" id='img'/>
                </div>
                
                <div className="card-body">
                  <h3 className=''>Card 1</h3>
                  <p className='text-success fw-bold'>$ 400</p>
                  <div className="d-flex justify-content-around">
                      <button className='btn btn-primary'><i class="bi bi-eye"></i>  View Details</button>
                      <button className='btn btn-secondary'><i class="bi bi-cart-plus-fill"></i>  Cart</button>
                  </div>
                  <hr className='container-fluid'  />
                  <p className='text-secondary'>Last updated at 06/03/2024</p>
                </div>
              </div>
            </div>
            <div className="col shadow p-2 rounded-3">
              <div className="card border-0">
                <div className="img">
                <img src="./images/p3.jpg" alt="image 1" id='img'/>
                </div>
                
                <div className="card-body">
                  <h3 className=''>Card 1</h3>
                  <p className='text-success fw-bold'>$ 400</p>
                  <div className="d-flex justify-content-around">
                      <button className='btn btn-primary'><i class="bi bi-eye"></i>  View Details</button>
                      <button className='btn btn-secondary'><i class="bi bi-cart-plus-fill"></i>  Cart</button>
                  </div>
                  <hr className='container-fluid'  />
                  <p className='text-secondary'>Last updated at 06/03/2024</p>
                </div>
              </div>
            </div>
            <div className="col shadow p-2 rounded-3">
              <div className="card border-0">
                <div className="img">
                <img src="./images/p4.jpg" alt="image 1" id='img'/>
                </div>
                
                <div className="card-body">
                  <h3 className=''>Card 1</h3>
                  <p className='text-success fw-bold'>$ 400</p>
                  <div className="d-flex justify-content-around">
                      <button className='btn btn-primary'><i class="bi bi-eye"></i>  View Details</button>
                      <button className='btn btn-secondary'><i class="bi bi-cart-plus-fill"></i>  Cart</button>
                  </div>
                  <hr className='container-fluid'  />
                  <p className='text-secondary'>Last updated at 06/03/2024</p>
                </div>
              </div>
            </div>
            <div className="col shadow p-2 rounded-3">
              <div className="card border-0">
                <div className="img">
                <img src="./images/p5.jpg" alt="image 1" id='img'/>
                </div>
                
                <div className="card-body">
                  <h3 className=''>Card 1</h3>
                  <p className='text-success fw-bold'>$ 400</p>
                  <div className="d-flex justify-content-around">
                      <button className='btn btn-primary'><i class="bi bi-eye"></i>  View Details</button>
                      <button className='btn btn-secondary'><i class="bi bi-cart-plus-fill"></i>  Cart</button>
                  </div>
                  <hr className='container-fluid'  />
                  <p className='text-secondary'>Last updated at 06/03/2024</p>
                </div>
              </div>
            </div>
       </div>
    </div>
      
    </>
  )
}

export default Card
