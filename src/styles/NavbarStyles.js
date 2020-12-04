import styled from "styled-components"

export const NavWrapper = styled.nav`
  background-color: ${({ scrolled }) => (scrolled ? "#0A0A0A" : "transparent")};
  position: ${({ scrolled }) => (scrolled ? "sticky" : "absolute")};
  z-index: 100;
  width: 100%;
  top: 0;
  transition: 0.5s ease-in-out;

  @media screen and (max-width: 960px) {
    background-color: #0a0a0a;
    position: sticky;
    z-index: 100;
    width: 100%;
    top: 0;
    transition: 0.5s ease-in-out;
  }
`

export const NavLi = styled.li`
  color: white;
  font-size: ${({ scrolled }) => (scrolled ? "1.2rem" : "1.5rem")};
  @media screen and (max-width: 960px) {
    margin: 0 0.5rem;
    font-size: 1.5rem;
  }

  a {
    color: white;
    font-size: ${({ scrolled }) => (scrolled ? "1.2rem" : "1.5rem")};
    &:hover {
      color: #f7b721;
      @media screen and (max-width: 960px) {
        font-size: 1.5rem;
      }
    }
  }
`

export const MobileIcon = styled.li`
  display: none;

  @media screen and (max-width: 960px) {
    display: contents;
    position: fixed;
    top: 0rem;
    right: 0rem;
    transform: translate(-100%, 60%);
    cursor: pointer;
    color: white;
    font-size: 1.5rem;
    margin: 0 0.5rem;
  }
`

export const LinkContainer = styled.ul`
  display: flex;
  width: 60%;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 90vw;
    position: absolute;
    top: 5.7rem;
    left: ${({ clicked }) => (clicked ? 0 : "-110%")};
    transition: all 0.5s ease;
    background: #0a0a0a;
  }
`
