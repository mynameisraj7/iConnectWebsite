import './Navbar.css';
import navimage from "./assets/iconnectlogo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const pressClick = () => {
    setNav(!nav);
  };

  const handleScrollLink = (e, targetId) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${targetId}`;
    }
    setNav(false);
  };

  useEffect(() => {
    setNav(false); 
  }, [location]);

  return (
    <div className='header'>
      <div className='logo'>
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={navimage} alt="iConnect Logo" height="83px" width="209.596px" />
        </Link>
      </div>

      <div id='navlinks' className={`navlinks ${nav ? 'mobile-active' : ''}`}>
        <ul id="navbar">
          <li><Link to="/about" onClick={pressClick}>About Us</Link></li>
          <li><a href="#initiative" onClick={(e) => handleScrollLink(e, "initiative")}>Our Initiative</a></li>
          <li><a href="#gallery" onClick={(e) => handleScrollLink(e, "gallery")}>Gallery</a></li>
          <li><a href="#contact" onClick={(e) => handleScrollLink(e, "contact")}>Contact</a></li>
          <li><a href='#'>Esummit</a></li>
        </ul>
        <a href="#" id="close" onClick={pressClick}><i className='bx bx-x'></i></a>
      </div>

      <div id="mobile" onClick={pressClick} className={nav ? 'mobile-active' : ''}>
        {!nav && <i className='bx bx-menu'></i>}
      </div>
    </div>
  );
}

export default Navbar;
