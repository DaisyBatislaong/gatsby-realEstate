import React from "react"
import logoWhite from "../img/logo-house-white.png"
import styles from "../styles/Footer.module.css"
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <img src={logoWhite} alt="" width="300" />
      <div className={styles.innerContainer}>
        <div className={styles.wordsContainer}>
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
        <div className={styles.line}></div>
        <div className={styles.iconContainer}>
          <a
            href="https://web.facebook.com/djbatislaong"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/DTechImperium"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a href="https://ph.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
