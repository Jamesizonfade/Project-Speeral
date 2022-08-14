import React from "react"
import{ FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

function Navbar () {
  return <nav className='nav-bar p-6 '>
  <span className='logo' >SPEERAL</span>
  <div className="nav-items flex">
  <a className='nav-link ml-8 mt-3 text-lg'>Community</a>
  <a className='nav-link ml-8 mt-3 text-lg'>Connect</a>
  <a href="#features" className='nav-link ml-8 mt-3 text-lg'>About Us</a>
  <button className='signup-btn ml-10'>Sign Up</button>
  <search className="search-item ml-5">
   <FontAwesomeIcon className="nav-icon " icon={faMagnifyingGlass} /> 
   <input id='nav-search' type="search" placeholder='IDEAS' /> 
  </search>
 
  </div>

  </nav>

}

export default Navbar