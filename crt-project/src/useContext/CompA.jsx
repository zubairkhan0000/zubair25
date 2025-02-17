// import React from 'react'
// import CompB from './CompB'

// export let user=React.createContext()
// export let id=React.createContext()
// const CompA = () => {
//   return (
//     <div>
//         <user.Provider value={"ZZZZ"}>
//             <id.Provider value={10}>
//                 <CompB/>
//             </id.Provider>
            
//         </user.Provider>
//     </div>
//   )
// }

// export default CompA

import React from 'react'
import CompB from './CompB'

export let username=React.createContext()
export let id=React.createContext()
const CompA = () => {
  return (
    <div>
      <username.Provider value={"abhi"}>
        <id.Provider value={100}>
          <CompB/>
        </id.Provider>
      </username.Provider>
    </div>
  )
}

export default CompA