import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <Link to="/Pglog">Login</Link>
        <Link to="/Pgsign">SignUp</Link>
    </div>
  )
}
