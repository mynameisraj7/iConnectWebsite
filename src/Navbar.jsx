import './Navbar.css'
import navimage from "./assets/iconnectlogo.png"
import { useState } from "react"

function Navbar() {
  let[nav,setNav]=useState(false)
  
   function pressClick(event){
     setNav(!nav)
   }
  return (
    <div className='header'>
      <div className='logo'>
        <img src={navimage} alt="image-pic" height="83px" width="209.596px"></img>
      </div>
       <div id='navlinks' className={`navlinks ${nav ? 'mobile-active' : ''}`}>
          <ul id="navbar" >
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Inatitive</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
          <a href="#" id="close" onClick={pressClick}><i className='bx bx-x'></i></a>
        </div>
        <div id="mobile" onClick={pressClick}className={nav ? 'mobile-active' : ''}>{nav ? (""):(<i className='bx bx-menu'></i>)}</div>
    </div>
  )
}

export default Navbar