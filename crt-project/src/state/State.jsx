// import React, { useState } from 'react'

// const State = () => {
//     // console.log(state);
//     // console.log(setState);

//     let [state,setState]=useState("batch-5")
//     console.log(state);
//     console.log(setState);

//     let demo=()=>{
//         setState("batch-6")
//     }
//   return (
//     <div>
//         <h1>{state}</h1>
//         <button onClick={demo}>click</button>

//     </div>
//   )
// }

// export default State

// import React, { useState } from 'react'

// const State = () => {
//   let [name,setName]=useState()
//   let[password,setPassword]=useState()
//   let demo=()=>{
//     e.preventDefault()
//     console.log({name,password});
//     name==='admin' && password==='12345' ?
//     window.open("https://pixabay.com") : window.location.reload()
//   }
//   return (
//     <div>
//       <form action=''>
//         <label htmlFor='name'>Name</label>
//         <input type='text' name='name' id='name' value={name}
//         onChange={(e)=>{setName(e.target.value)}}/>

//         <br/>

//         <label htmlFor="password">password</label>
//         <input type="password" name="password" id='password' value={password} 
//         onChange={(e)=>{setPassword(e.target.value)}}/>

//         <br />
//         <button onClick={demo}>submit</button>
//       </form>
//     </div>
//   )
// }

// export default State
import React,{useState} from 'react';
import video1 from "./1.mp4";

const State = () => {
  let demo1 = document.getElementById("demo")
  console.log(demo1);
   setState(!state)
   state === true ? demo1?.onplay() : demo1?.pause()
  return (
    <div>
      <video src={video1} height = "300px" id = 'demo' onClick = {demo}></video>
    </div>
  )
}

export default State