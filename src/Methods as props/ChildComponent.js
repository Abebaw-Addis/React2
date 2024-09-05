import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <div style={{padding: '10px'}}>{props.text}</div>
        {/* <button className='button'
        onClick={props.greeting}>Greet Parent</button> */}

        {/**passing a parameter to the handler method by changing it to an arrow function */}
        <button className='button'
        onClick={() => props.greeting('Child')}>Greet Parent</button>
      </div>
  )
}

export default ChildComponent
