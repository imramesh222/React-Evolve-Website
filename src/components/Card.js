import React from 'react'

const Card = (props) => {
  return (
    <>
            <div className="col p-2 g-2">
              <div className="card border-0" id='card'>
                
                   <img src={props.item.image} alt="image 1" id='img' className='pt-2'/>
                
                <div className="card-body px-2">
                  <h3 className=''>{props.item.title.slice(0,10)}..</h3>
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
