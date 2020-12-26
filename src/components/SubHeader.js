import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'


const SubHeader = () => {
  const data = useStaticQuery(graphql`
  {
   fluid: file(relativePath: { eq: "city3.jpg" }) {
     childImageSharp {
       fluid {
         ...GatsbyImageSharpFluid_tracedSVG
       }
     }
   }
 }
  `)
  return(
   <div className="headerContainer">
   <Image fluid={data.fluid.childImageSharp.fluid} style={{ height: "10rem"}} />
 </div>
  )
}

export default SubHeader