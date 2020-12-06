import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import styles from "../styles/house-template.module.css"

const ComponentName = ({ data }) => {
  const {
    houses: {
      bath,
      beds,
      size,
      city,
      img,
      street: { street },
      price,
      description: { description },
    },
  } = data

  return (
    <Layout>
      <div>
        <Image fluid={img[0].fluid} style={{ width: "100%" }} />
      </div>
      <section className={styles.imgContainer}>
        {img.map(image => {
          return (
            <Image
              fluid={image.fluid}
              style={{ width: "10rem", height: "auto" }}
            />
          )
        })}
      </section>
      <article className={styles.article}>
        <h1>{street}</h1>
        <h4>{city}</h4>
        <h2>${price}</h2>
        <h4>{bath} Baths | {beds} Beds | {size} Sq.Ft.</h4>
        <p>{description}</p>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProduct($house: String) {
    houses: contentfulRealEstate(itemid: { eq: $house }) {
      img {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      street {
        street
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
