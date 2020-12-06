import React from "react"
import Navbar from "./Navbar"
import "../styles/globalStyles.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />
      <div>{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout
