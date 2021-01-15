import * as React from "react";
import { Link } from "gatsby";
import { window, document, exists } from "browser-monads";
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
            <li className="navLinks">
               <Link to="/">Home</Link>
            </li>
            <li className="navLinks">
               <Link to="/properties">Properties</Link>
            </li>
            <li className="navLinks">
               <Link to="/about">About Us</Link>
            </li>
            <li className="navLinks">
               <Link to="/contact">Contact</Link>
            </li>
         </NavList>
         <ul className="flex justify-end w-3/4 lg:w-1/12 lg:justify-around ">
            <li className="mx-2 lg:mx-0 group cursor-pointer relative">
               <FaPhone />
               <ul className=" absolute top-8 place-content-center w-40 right-1 -left-14 gap-y-1 hidden group-hover:grid">
                  <li className="bg-lightGreen-100 p-2 hover:bg-lightGreen-200">
                     <h2 className="text-base">Coral Gables Office</h2>
                     <h5 className="text-sm">305.722.5720</h5>
                  </li>
                  <li className="bg-lightGreen-100 p-2 hover:bg-lightGreen-200">
                     <h2 className="text-base">Miami Beach Office</h2>
                     <h5 className="text-sm">305.341.7440</h5>
                  </li>
               </ul>
            </li>
            <li className="mx-2 lg:mx-0 group cursor-pointer relative">
               <FaEnvelope />
               <ul className="absolute top-8 place-content-center w-40 right-1 -left-16 gap-y-1 hidden group-hover:grid">
                  <li className="bg-lightGreen-100 p-2 hover:bg-lightGreen-200">
                     <h2 className="text-base">Coral Gables Office</h2>
                     <h5 className="text-sm">cg@jillszeder.com</h5>
                  </li>
                  <li className="bg-lightGreen-100 p-2 hover:bg-lightGreen-200">
                     <h2 className="text-base">Miami Beach Office</h2>
                     <h5 className="text-sm">mb@jillszeder.com</h5>
                  </li>
               </ul>
            </li>
            <li className="inline-block ml-2 mr-4 cursor-pointer lg:hidden lg:mx-0" onClick={handleClicked}>
               {clicked ? <FaTimes /> : <FaBars />}
            </li>
         </ul>
      </Nav>
   );
};

export default Navbar;
