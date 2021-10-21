import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
          <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo left">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">The Bar</a></li>
        <li><a href="badges.html">Drink Menu</a></li>
        <li><a href="collapsible.html">Sign Up</a></li>
        <li><a href="collapsible.html">About The Team</a></li>
      </ul>
    </div>
  </nav>
      </div>
    )
  }
}

export default Navbar

