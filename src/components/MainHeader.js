import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Header = () => {
   const data = useStaticQuery(graphql`
      {
         houses: contentfulOtherContent(title: { eq: "realEstatebg" }) {
            background {
               fluid {
                  ...GatsbyContentfulFluid
               }
            }
         }
      }
   `);
   return (
      <div className="headerContainer">
         <Image fluid={data.houses.background.fluid} />
      </div>
   );
};

export default Header;
