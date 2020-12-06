import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"

const ComponentName = ({ data }) => {
  const {
    houses: {
      bath,
      beds,
      size,
      city,
      img,
      name: { name },
      price,
      description: { description },
    },
  } = data
  return (
    <Layout>
      <Image fixed={img[0].fixed} />
    </Layout>
  )
}

export const query = graphql`
  query getSingleProduct($house: String) {
    houses: contentfulRealEstate(itemid: { eq: $house }) {
      img {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
      name {
        name
      }
      bath
      beds
      size
      price
      city
      description {
        description
      }
    }
  }
`

export default ComponentName
