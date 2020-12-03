import React from "react"
import Navbar from "./Navbar"
import "../styles/globalStyles.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default Layout
