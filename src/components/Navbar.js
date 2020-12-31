import * as React from "react";
import { Link } from "gatsby";
import logo from "../img/logo-house-white.png";
import { FaPhone, FaEnvelope, FaTimes, FaBars } from "react-icons/fa";
import { Nav, ImgCon, NavList } from "../styles/NavbarStyles";

const Navbar = () => {
   const [scrolled, setScroll] = React.useState(false);
   const [resized, setSize] = React.useState(false);
   const [clicked, setClick] = React.useState(false);

   const changeBackground = () => {
      if (window.scrollY) {
         setScroll(true);
      } else {
         setScroll(false);
      }
   };

   const changeSize = () => {
      if (window.innerWidth <= 960) {
         setSize(true);
      } else {
         setSize(false);
      }
   };

   const handleClicked = () => {
      setClick(!clicked);
   };

   window.addEventListener("scroll", changeBackground);
   window.addEventListener("resize", changeSize);
   return (
      <Nav scrolled={scrolled} className="nav 2xl:container">
         <ImgCon scrolled={scrolled} className="w-60">
            <img src={logo} alt="" />
         </ImgCon>
         <NavList className="hidden sm:flex justify-around w-4/6 " clicked={clicked} scrolled={scrolled}>
            <li >
               <Link to="/" className=" ">
                  Home
               </Link>
            </li>
            <li>
               <Link to="/properties">Properties</Link>
            </li>
            <li>
               <Link to="/about">About Us</Link>
            </li>
            <li>
               <Link to="/contact">Contact</Link>
            </li>
         </NavList>
         <ul className="flex justify-end w-3/4 lg:w-1/12 lg:justify-around">
            <li className="mx-2 lg:mx-0">
               <FaPhone />
            </li>
            <li className="mx-2 lg:mx-0">
               <FaEnvelope />
            </li>
            <li className="inline-block ml-2 mr-4 cursor-pointer lg:hidden lg:mx-0" onClick={handleClicked}>
               {clicked ? <FaTimes /> : <FaBars />}
            </li>
         </ul>
      </Nav>
   );
};

export default Navbar;
