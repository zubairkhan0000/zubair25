// import React from 'react'
// import { user } from './CompA'
// import { id } from './CompA'
// const CompC = () => {
//   return (
//     <div>
//         {
//             <user.Consumer>
//                 {
//                     (name)=>{
//                        return(
//                         <>
//                         {
//                             <id.Consumer>
//                                 {
//                                     (number)=>{
//                                         return(
//                                             <>
//                                             <h1>my name is {name}</h1>
//                                             <h1>My id is {number} </h1>
//                                             </>
//                                         )
                                           
                                        
//                                     }
//                                 }
//                             </id.Consumer>
//                         }
//                         </>
//                        )
//                     }
//                 }
//             </user.Consumer>
//         }
//     </div>
//   )
// }

// export default CompC

import React, { useContext } from 'react'
import { username,id } from './CompA'
const CompC = () => {
    let name=useContext(username)
    let id1=useContext(id)
  return (
    <div>
        {name} and {id1}
    </div>
  )
}

export default CompC