import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-scroll';

import './Menu.css';
      

const NavBar = () => {
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    console.log(isMenuOpen)
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };
  const link1 = "http://misvalores.lynxbursatil.com.ar/"
  return (
    <Menu 
    right 
    pageWrapId={'page-wrap'} 
    outerContainerId={'outer-container'}
    isOpen={isMenuOpen}
    onStateChange={handleStateChange} >
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="home" 
      activeClass="active" 
      smooth={true} 
      style={{"cursor":"pointer"}}
      spy={true}
      duration={2000}
      delay={500}>
        <strong>01</strong> Inicio
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="about" 
      activeClass="active" 
      smooth={true} 
      style={{"cursor":"pointer"}}
      spy={true}
      duration={2000}
      delay={500}>
        <strong>02</strong> Quienes Somos
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="products" 
      activeClass="active" 
      smooth="true" 
      style={{"cursor":"pointer"}}
      spy={true}
      duration={2000}
      delay={500}>
        <strong>03</strong> Productos
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="services" 
      activeClass="active" 
      smooth="true" 
      style={{"cursor":"pointer"}} 
      spy={true}
      duration={2000}
      delay={500} >
        <strong>04</strong> Servicios
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="client" 
      activeClass="active" 
      smooth="true" 
      style={{"cursor":"pointer"}}
      spy={true}
      duration={2000}
      delay={500}>
        <strong>05</strong> Clientes
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="faqs" 
      activeClass="active" 
      smooth="true" 
      style={{"cursor":"pointer"}} 
      spy={true}
      duration={2000}
      delay={500}>
        <strong>06</strong> Preguntas Frecuentes
      </Link>
      <Link 
      onClick={()=> handleCloseMenu()} 
      className="menu-item" 
      to="contact" 
      activeClass="active" 
      smooth="true" 
      style={{"cursor":"pointer"}} 
      spy={true}
      duration={2000}
      delay={500}>
        <strong>07</strong> Contacto
      </Link>
      <div className="menu-link-container">
        <a href={link1} className="menu-item-link"><strong>08</strong> Operar</a>
        <Link 
        onClick={()=> handleCloseMenu()} 
        className="menu-item-link" 
        to="contact" 
        activeClass="active" 
        smooth="true" 
        style={{"cursor":"pointer"}} 
        spy={true}
        duration={2000}
        delay={500}>
          <strong>09</strong> Abrí tu cuenta
        </Link>
      </div>
    </Menu>
  );
};
export default NavBar


// import React, { useState } from "react";
// import { push as Menu } from "react-burger-menu";
// import { Link } from "react-router-dom";
// import "./styles.css";

// const Navbar = () => {
//   const [isMenuOpen, handleMenu] = useState(false);
//   const handleCloseMenu = () => {
//     handleMenu(false);
//   };
//   const handleStateChange = (state) => {
//     handleMenu(state.isOpen);
//   };
//   return (
//     <React.Fragment>
//       <Menu
//         pageWrapId={"page-wrap"}
//         isOpen={isMenuOpen}
//         onStateChange={handleStateChange}
//       >
//         <div>
//           <Link onClick={() => handleCloseMenu()} to="Home">
//             Home
//           </Link>
//         </div>
//         <div>
//           <Link onClick={() => handleCloseMenu()} to="Work">
//             Work
//           </Link>
//         </div>
//       </Menu>
//     </React.Fragment>
//   );
// };

// export default Navbar;