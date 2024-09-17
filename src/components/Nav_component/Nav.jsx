import React from 'react'
import image from './netflix_logo.png'
import "./Nav.css";
function Nav() {
  return (
    <div><br /> 
      <header>
        <img src={image} alt="#" />
        <div className="head-inputs">
          <select name="lang" id="lang">
            <option value="en">English</option>
            <option value="hindi">हिन्दी</option>
          </select>
          <button>Sign In</button>
        </div>
      </header>
    </div>
  )
}

export default Nav
