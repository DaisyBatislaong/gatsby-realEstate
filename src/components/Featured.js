import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../styles/Houses.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      houses: allContentfulRealEstate(filter: { featured: { eq: true } }) {
        nodes {
          itemid
          id
          bath
          beds
          price
          size
          name {
            name
          }
          img {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <h1>FEATURED HOUSES</h1>

        <section className={styles.page}>
          {data.houses.nodes.map(house => {
            return (
              <Link to={`/properties/${house.itemid}`}>
              <article key={house.id} className={styles.wrapper}>
                <Image
                  fluid={house.img[0].fluid}
                  alt={house.name.name}
                  style={{ height: "15rem" }}
                />
                <div className={styles.wrapperInner}>
                  <h3>
                    {house.name.name} | ${house.price}
                  </h3>
                  <div className={styles.description}>
                    <h5>
                      <span className={styles.firstSpan}>
                        {house.bath} Baths | {house.bed} Beds | {house.size}
                        sq.ft.
                      </span>
                      <span>
                        <Link to={`/properties/${house.itemid}`}>
                          <button>Explore</button>
                        </Link>
                      </span>
                    </h5>
                  </div>
                </div>
              </article>
              </Link>
            )
          })}
        </section>
      <div className={styles.flex}>
        <button className={styles.button}>
          <Link to="/properties">View All Properties</Link>
        </button>
      </div>
    </>
  )
}

export default Featured
