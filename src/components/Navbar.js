import React, { useState } from "react"
import { Link } from "gatsby"
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa"
import styles from "../styles/Navbar.module.css"
import logoWhite from "../img/logo-house-white.png"
import {
  NavWrapper,
  NavLi,
  MobileIcon,
  LinkContainer,
} from "../styles/NavbarStyles"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [resized, setResized] = useState(false)
  const [clicked, setClicked] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const changeSize = () => {
    if (window.innerWidth <= 960) {
      setResized(true)
    } else {
      setResized(false)
    }
  }

  const handleClicked = () => {
    setClicked(!clicked)
  }
  window.addEventListener("scroll", changeBackground)
  window.addEventListener("resize", changeSize)

  return (
    <NavWrapper scrolled={scrolled}>
      <div className={styles.navContainer}>
        <Link>
          <img src={logoWhite} alt="" width={scrolled || resized ? 160 : 208} />
        </Link>
        <LinkContainer className={styles.linkContainer} clicked={clicked}>
          <NavLi scrolled={scrolled}>
            <Link to="/" className={styles.middle}>
              Home
            </Link>
          </NavLi>
          <NavLi scrolled={scrolled}>
            <Link to="/properties" className={styles.middle}>
              Properties
            </Link>
          </NavLi>
          <NavLi scrolled={scrolled}>
            <Link to="/" className={styles.middle}>
              About Us
            </Link>
          </NavLi>
          <NavLi scrolled={scrolled}>
            <Link to="/" className={styles.middle}>
              Contact
            </Link>
          </NavLi>
        </LinkContainer>
        <ul className={styles.iconContainer}>
          <NavLi scrolled={scrolled} resized={resized}>
            <FaEnvelope />
          </NavLi>
          <NavLi scrolled={scrolled} resized={resized}>
            <FaPhone />
          </NavLi>
          <MobileIcon onClick={handleClicked}>
            {clicked ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </ul>
      </div>
    </NavWrapper>
  )
}

export default Navbar
