import React from 'react'
import { FaStar,FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const RatingStar = (props) => {

  const rating=props.rating
  let stars=[]
  for(let i=1;i<=5;i++){
    if(i<=rating){
      stars.push(<FaStar key={i}/>)
    }
    else if(i==Math.ceil(rating) && !Number.isInteger(rating)){
      stars.push(<FaStarHalfAlt key={i}/>)
    }
    else{
      stars.push(<FaRegStar key={i}/>)
    }
  }

  return (
    <>
    <p className='fw-bold'>Reviews : <span className='text-warning'>{stars}</span></p>
   
      
    </>
  )
}

export default RatingStar
