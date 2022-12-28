import React/*,{ useEffect, useState }*/ from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
      <nav class="primary_nav">
        <h1 class="logo">Social Piper</h1>
        <ul class="nav_links">
            <li class="nav_link"><Link to='./Features'>Features</Link> </li>
            <li class="nav_link"><Link to='./CaseStudies'>Case Studies</Link> </li>
            <li class="nav_link"><Link to='./Pricing'>Pricing</Link> </li>
            <li class="nav_link"><Link to='./Blog'>Blog</Link> </li>
            <li class="nav_link"><Link to='./SignUp'>Sign up</Link> </li>
        </ul>
    </nav>
  )
}

export default Navbar
