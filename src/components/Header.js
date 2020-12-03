import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      fluid: file(relativePath: {eq: "header3.jpg"}) {
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
      <Image fluid={data.fluid.childImageSharp.fluid}/>
     </div>
  )
}

export default Header