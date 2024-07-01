import React, { useEffect, useState } from 'react'

const Counter = () => {

  const[num,setNum]=useState(5)
    //Num is variable tha stores value
    // setNum is a function that updates the value of num

    const decrement=()=>{
      setNum(num-1)
    }

    const increment=()=>{
      setNum(num+1)
    }


    // useEffect(()=>{
    //   alert(`state changed`)
    // },num)

    const reset=()=>{
      setNum(5)
    }
  return (
    <>
      <h1 className='display-1 text-center fw-bold'>The initial state is {num}.</h1>

      <div className="but">
        
          {num>0 &&   <button className='btn btn-primary' onClick={decrement}>Down</button>
        }

        {num<10 && <button className='btn btn-danger' onClick={increment}>Up</button>}
          
          <button className='btn btn-secondary' onClick={reset}>Reset</button>
      </div>

    </>
  )
}

export default Counter
