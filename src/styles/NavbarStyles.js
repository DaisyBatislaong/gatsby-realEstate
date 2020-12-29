import styled from "styled-components";

export const Nav = styled.nav`
   background-color: ${({ scrolled }) => (scrolled ? "" : "transparent")};
   position: ${({ scrolled }) => (scrolled ? "sticky" : "absolute")};
   z-index: 100;
   width: 100%;
   top: 0;
   transition: 0.5s ease-in-out;
`;

export const ImgCon = styled.div`
   width: ${({ scrolled }) => (scrolled ? "12rem" : "")};
   margin-left: ${({ scrolled }) => (scrolled ? "3.5rem" : "1.5rem")};

   @media screen and (max-width: 768px) {
      margin-left: 1rem;
   }
`;

export const NavList = styled.ul`
@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100vw;
    position: absolute;
    top: ${({ scrolled }) => (scrolled ? "5.5rem" : "6rem")};
    left: ${({ clicked }) => (clicked ? 0 : "-110%")};
    transition: all 0.5s ease;
    background-color: ${({ scrolled }) => (scrolled ? "#17252A" : "black")};
  }
`
