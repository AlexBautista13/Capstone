import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const SignedOutLinks = () => {
    return (
      
      <ul className="right">
          <li><NavLink to='/signup'>SignUp</NavLink></li>
          <li><NavLink to='/signin'>SignIn</NavLink></li>             
      </ul>

    )
}

export default SignedOutLinks