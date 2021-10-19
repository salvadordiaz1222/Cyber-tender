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
              Welcome
            </Link>
          </li>
          <li className="">
            <Link 
              className="" 
              to="/Questions">
              Questions
            </Link>
          </li>
          <li className="">
            <Link 
              className="" 
              to="/Drink">
              Drink
            </Link>
          </li>
          
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
