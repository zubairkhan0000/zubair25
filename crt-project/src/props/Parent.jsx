// import React from "react"
// class Parent extends React.Component{
//     state={
//         username:"Kumar"
//     }
//     render()
//     {
//         return(
//             <Child name={this.state.username}/>
//         )
//     }
// }
// export default Parent;
import React from 'react'
import Child from './Child'

const parent = () => {
    let obj1={
        name:"ram",
        age:"18",
        designation:"developer"
    }
  return (
    <div>
        {/* <Child name= "abhi" /> */}
        {/* <Child age={23}/> */}
        {/* <Child arr={[10,20,30]}/> */}
        <Child obj={obj1}/>
        
    </div>
  )
}

export default parent