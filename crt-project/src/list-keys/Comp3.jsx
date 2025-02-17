import React from 'react'
import List from './List'

const Comp3 = () => {
    let demo=[{
        name:"abhi",
        id:1
    },
    {
        name:"rahul",
        id:2
    },
    {
        name:"kalki",
        id:3
    }
]
  return (
    <div>
        <List main={demo}/>
    </div>
  )
}

export default Comp3

