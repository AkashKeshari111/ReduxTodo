import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/">CounterApp</Link>
        <Link to="/TodoApp">TodoApp</Link>
    </div>
  )
}

export default Navbar