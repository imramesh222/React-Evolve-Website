import React from 'react'

const Card = (props) => {
  return (
    <>
            <div className="col shadow p-2 rounded-3">
              <div className="card border-0">
                
                   <img src={props.item.image} alt="image 1" id='img'/>
                
                <div className="card-body px-2">
                  <h3 className=''>{props.item.title.slice(0,20)}..</h3>
                  <p className='text-success fw-bold'>$ {props.item.price}</p>
                  <div className="d-flex justify-content-between ">
                      <button className='btn btn-primary'><i class="bi bi-eye"></i>  View Details</button>
                      <button className='btn btn-secondary'><i class="bi bi-cart-plus-fill"></i>  Cart</button>
                  </div>
                  <hr className='container-fluid'  />
                  <p className='text-secondary'>Last updated at 06/03/2024</p>
                </div>
              </div>
            </div>

    
      
    </>
  )
}

export default Card
