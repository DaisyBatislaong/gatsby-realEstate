import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
   return (
      <div className="2xl:container">
         <Navbar />
         <div>{children}</div>

         <Footer />
      </div>
   );
};

export default Layout;
