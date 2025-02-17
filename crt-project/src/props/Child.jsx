// import React from "react"
// class Child extends React.Component{
//     render()
//     {
//         return(
//             <>
//             <h1>my name is {this.props.name}</h1>
//             </>
//         )
//     }
// }
// export default Child;

import React from 'react'

const Child = (props) => {
    console.log(props.obj);
    let {name,age,designation}=props.obj
  return (
    <div>
        {/* <h1>my arr is {props.arr} </h1> */}
        <h1>name</h1>
        <h1>age</h1>
        <h1>designation</h1>
    </div>
  )
}

export default Child