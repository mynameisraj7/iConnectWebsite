import navimage from "./assets/navbar_img.png"
import { useState } from "react"

function Navbar() {
 let[nav,setNav]=useState(false)

 function pressClick(event){
   setNav(!nav)
 }

  return (
    <div className="navbar">
        <img src={navimage} alt="image-pic" height="50px" width="50px"></img>
        <div>
          <ul id="navbarcontents" className={`navbarcontents ${nav ? 'mobile-active' : ''}`}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Services</a></li>
              <a href="#" id="close" onClick={pressClick}><i class='bx bx-x'></i></a>
          </ul>
        </div>
        <div id="mobile" onClick={pressClick}className={nav ? 'mobile-active' : ''}>{nav ? (""):(<i class='bx bx-menu'></i>)}</div>
    </div>
  )
}

export default Navbar