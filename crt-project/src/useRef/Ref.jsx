// import React,{useRef} from 'react'


// const Ref = () => {
//     // let demo=useRef()
//     // console.log(demo);
//     // console.log(demo.current);
//     // demo.current.style.backgroundColor="red"

//     let demo1=useRef()
// console.log(demo1);
// let eventHandler=()=>{
//     demo1.current.style.backgroundColor="crimson"
// }
//   return (
//     <div>
//         {/* <h1 ref={demo}>hello world</h1> */}
//         <h2 ref={demo1}>hello world</h2>
//         <button onClick={eventHandler}>click me</button>

//     </div>
//   )
// }

// export default Ref

import React, { useRef } from 'react'

const Ref = () => {
    let name=useRef('')
    let password=useRef('')

    let demo=(e)=>{
        e.preventDefault()
        
        console.log({name :name.current.value});
        console.log({password :password.current.value});
    }
  return (
    <div>
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' />
            <br />

            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' />
            <br />
            <button onClick={demo}>Submit</button>
        </form>
    </div>
  )
}

export default Ref