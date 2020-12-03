import React from "react"
import { Link } from "gatsby"
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa"
import styles from "../styles/Navbar.module.css"
import logo from "../img/logoHouse2.png"

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <Link>
          <img src={logo} alt="" />
        </Link>
        <ul className={styles.linkContainer}>
          <li>
            <Link to="/" className={styles.middle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.middle}>
              Properties
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.middle}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.middle}>
              Contact
            </Link>
          </li>
        </ul>
        <ul className={styles.iconContainer}>
          <li>
            <FaEnvelope />
          </li>
          <li>
            <FaPhone />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
