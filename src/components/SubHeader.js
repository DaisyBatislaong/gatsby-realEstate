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
   <div className="relative">
   <Image fluid={data.fluid.childImageSharp.fluid} style={{ height: "10rem"}} />
   <div className="absolute bg-gray-700 w-full h-full top-0 opacity-70"></div>
 </div>
  )
}

export default SubHeader