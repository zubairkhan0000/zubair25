//NO DEPEMDEMCY

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(()=>state+1)
//         }, 2000)
//     })
//   return (
//     <div>
//         <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect

//EMPTY DEPENDENCY

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(()=>state+1)
//         }, 2000)
//     },[])
//   return (
//     <div>
//         <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect

//DEPENDENCY WITH VALUE

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state,setState]=useState(0)
//     let [inc,setInc]=useState(0)

//     useEffect(()=>{
//         setInc(()=>state*2)
//     },[state])
//   return (
//     <div>
//         {state}
//         <br />
//         <button onClick={()=> setState((e)=>e+1)}>click</button>
//         <br />
//         {inc}
        

//     </div>
//   )
// }

// export default UseEffect

//FETCH API USING USEEFFECT

import React, { useEffect, useState } from 'react'
import "./useeffect.css"

const UseEffect = () => {
  let [state,setState]=useState([])
  console.log(state);

  useEffect(()=>{
    window.fetch("https://fakestoreapi.com/products")
    .then((data)=>data.json())
    .then((res)=>setState(res))
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>price</th>
            <th>image</th>
          </tr>
          </thead>
            {
              state.map((res)=>{
                console.log(res);
                return(
                  <>
                  <tr>
                    <td>{res.id}</td>
                    <td>{res.price}</td>
                    <td><img src={res.image} alt="" /></td>
                  </tr>
                  </>
                )
              })
            }
      </table>
    </div>
  )
}

export default UseEffect