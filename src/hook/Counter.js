// import React, { useEffect, useState } from 'react'

// const Counter = () => {

//   const[num,setNum]=useState(5)
//     //Num is variable tha stores value
//     // setNum is a function that updates the value of num

//     const decrement=()=>{
//       setNum(num-1)
//     }

//     const increment=()=>{
//       setNum(num+1)
//     }


//     // useEffect(()=>{
//     //   alert(`state changed`)
//     // },num)

//     const reset=()=>{
//       setNum(5)
//     }
//   return (
//     <>
//       <h1 className='display-1 text-center fw-bold'>The initial state is {num}.</h1>

//       <div className="but">
        
//           {num>0 &&   <button className='btn btn-primary' onClick={decrement}>Down</button>
//         }

//         {num<10 && <button className='btn btn-danger' onClick={increment}>Up</button>}
          
//           <button className='btn btn-secondary' onClick={reset}>Reset</button>
//       </div>

//     </>
//   )
// }

// export default Counter


// import React, { useEffect, useState } from 'react'



// const Counter = () => {
//   const [num,setNum] =useState(5)

//   const down=()=>{
//     setNum(num-1)
//   }
//   const up=()=>{
//     setNum(num+1)
//   }

//   const reset=()=>{
//     setNum(5)
//   }


//   useEffect(()=>{
//     alert('State Changed')
//   },num)
//   return (
//     <>
//     <h1 className='display-1 text-center fw-bold'>the state is {num}.</h1>
//     <div className="d-flex justify-content-center">

//       {num>0 && <button className='btn btn-primary me-2' onClick={down}>Down</button>}
 
//       {num<10 && <button className='btn btn-danger ' onClick={up}>Up</button>}

//       <button className='btn btn-secondary ' onClick={reset}>Reset</button>


//     </div>
    


      
//     </>
//   )
// }

// export default Counter

import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0)

  const counting=()=>{
    setCount(count+1)
  }

  const reset=()=>{
    setCount(0)
  }

  


  return (
    <>
    <div className="d-flex justify-content-center ">

    <button className='btn btn-danger p-2 me-2' onClick={counting}>You clicked me {count} times.</button>

    <button className='btn btn-primary p-2' onClick={reset}>Reset to 0</button>

    </div>
      
    </>
  )
}

export default Counter
