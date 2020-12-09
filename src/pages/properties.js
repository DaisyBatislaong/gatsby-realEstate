import React from "react"
import {graphql } from "gatsby"
import Layout from "../components/Layout"
import Properties from "../components/Properties"
import Image from "gatsby-image"


const index = ({data}) => {
  return (
    <Layout>
      <div className="headerContainer">
        <Image fluid={data.fluid.childImageSharp.fluid} style={{ height: "10rem" }} />
      </div>
      <Properties />
    </Layout>
  )
}

export const query = graphql`
  {
    fluid: file(relativePath: { eq: "city3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default index
