import React from "react"
import { useStaticQuery, graphql, Link} from "gatsby"
import styles from "../styles/Properties.module.css"
import Image from "gatsby-image"


const Properties = () => {
  const data = useStaticQuery(graphql`
    {
      houses: allContentfulRealEstate {
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
      <h1>ALL PROPERTIES</h1>
      <section className={styles.page}>
        {data.houses.nodes.map(house => {
          return (
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
                      {house.bath} Baths | {house.bed} Beds | {house.size}{" "}
                      sq.ft.
                    </span>
                    <span>
                      <button> <Link to={`/properties/${house.itemid}`}>Explore</Link></button>
                    </span>
                  </h5>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Properties
