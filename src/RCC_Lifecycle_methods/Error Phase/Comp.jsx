import React from 'react'
import "./error.css"
function Comp({name}) {

    if(name === 'Abebaw'){
      return new Error('Abebaw isn\'t a name')
    }
  return (
      <ul className='lists'>
        <li>
        Name: {name} is Allowed
        </li>
      </ul>
  )
}

export default Comp
