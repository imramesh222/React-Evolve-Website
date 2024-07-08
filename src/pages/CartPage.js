import React, { useState } from 'react'

const CartPage = () => {
  const[data,SetData]=useState([])

  const cartItems = JSON.parse(localStorage.getItem('cartItems'))
  console.log(cartItems)
  const GetData=()=>{

  }

  return (
    <>

      
    </>
  )
}

export default CartPage
