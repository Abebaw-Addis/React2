import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
      <nav>
        <ul>
            <li>
                <Link to="Button">Button</Link>
            </li>
            <li>
                <Link to="ToDoList">ToDoList</Link>
            </li>
        </ul>
      </nav>
  )
}

export default Navbar
