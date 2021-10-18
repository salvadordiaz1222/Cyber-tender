import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className=" ">
  <div className="">
      <p className="">
        Cyber-Tender
      </p> 
    <div className="">
      <ul className="">
          <li className="">
            <Link 
              className="" 
              to="/">
              Home
            </Link>
          </li>
          <li className="">
            <Link 
              className="" 
              to="/projects">
              Projects
            </Link>
          </li>
          <li className="">
            <Link 
              className="" 
              to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="" 
              to="/contact">
              Contact Me
            </Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
