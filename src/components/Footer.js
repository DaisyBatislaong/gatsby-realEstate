import React from "react";
import logoWhite from "../img/logo-house-white.png";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="bg-myBlack text-myWhite-100 text-lg">
         <div className=" flex-col p-20 justify-center flex-wrap place-items-center">
            <div className="flex items-center justify-around flex-wrap place-items-center">
               <img src={logoWhite} alt="" width="400" className="place-self-center" />
               <div className="grid sm:grid-cols-2 sm:gap-x-12 gap-y-4 pt-4 sm:pt-0 place-self-center">
                  <div className="place-items-center">
                     <h2>Coral Gables Office</h2>
                     <h5>4000 Ponce Blvd Suite 700</h5>
                     <h5>Coral Gables, FL 33146</h5>
                     <h5>305.722.5720</h5>
                     <h5>cg@jillszeder.com</h5>
                  </div>
                  <div className="place-items-center">
                     <h2>Miami Beach Office</h2>
                     <h5>1682 Jefferson Avenue</h5>
                     <h5>Miami Beach, FL 33139</h5>
                     <h5>305.341.7440</h5>
                     <h5>mb@jillszeder.com</h5>
                  </div>
               </div>
            </div>
            <div className="flex text-2xl sm:place-content-center place-self-center pt-4">
               <a href="https://web.facebook.com/djbatislaong" target="_blank" rel="noreferrer" className="mx-3 ">
                  <FaFacebook className="hover:bg-lightGreen-100" />
               </a>
               <a href="https://twitter.com/DTechImperium" target="_blank" rel="noreferrer" className="mx-3 ">
                  <FaTwitter className="hover:bg-lightGreen-100" />
               </a>
               <a href="https://ph.linkedin.com/" target="_blank" rel="noreferrer" className="mx-3 ">
                  <FaLinkedinIn className="hover:bg-lightGreen-100" />
               </a>
               <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="mx-3 ">
                  <FaInstagram className="hover:bg-lightGreen-100" />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
