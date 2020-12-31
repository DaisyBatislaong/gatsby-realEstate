import React from "react";
import logoWhite from "../img/logo-house-white.png";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="bg-myBlack text-myWhite-100 text-lg mt-40">
         <div className=" flex-col p-20 justify-center flex-wrap">
            <div className="flex items-center justify-around">
               <div>
                  <img src={logoWhite} alt="" width="300" />
               </div>
               <div className="grid sm:grid-cols-2 gap-12 ">
                  <div>
                     <h2>Coral Gables Office</h2>
                     <h5>4000 Ponce de Leon Blvd Suite 700</h5>
                     <h5>Coral Gables, FL 33146</h5>
                     <h5>305.722.5721</h5>
                     <h5>cg@jillszeder.com</h5>
                  </div>
                  <div>
                     <h2>Miami Beach Office</h2>
                     <h5>1682 Jefferson Avenue</h5>
                     <h5>Miami Beach, FL 33139</h5>
                     <h5>305.341.7447</h5>
                     <h5>mb@jillszeder.com</h5>
                  </div>
               </div>
            </div>
            <div className="flex text-2xl justify-center">
               <a href="https://web.facebook.com/djbatislaong" target="_blank" rel="noreferrer" className="mx-3">
                  <FaFacebook />
               </a>
               <a href="https://twitter.com/DTechImperium" target="_blank" rel="noreferrer" className="mx-3">
                  <FaTwitter />
               </a>
               <a href="https://ph.linkedin.com/" target="_blank" rel="noreferrer" className="mx-3">
                  <FaLinkedinIn />
               </a>
               <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="mx-3">
                  <FaInstagram />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
