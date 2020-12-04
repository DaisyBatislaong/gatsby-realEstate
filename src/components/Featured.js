import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../styles/Featured.module.css"
import Image from "gatsby-image"

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      houses: allContentfulRealEstate(filter: { featured: { eq: true } }) {
        nodes {
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  `)
  return (
    <section className={styles.page}>
    {data.houses.nodes.map(house=>{
       return (<article key={house.id}>
         <Image fluid={house.img[0].fluid} alt={house.name.name}>{house.name.name}</Image>
         <h3>{house.name.name} <span>${house.price}</span> </h3>
         </article>)
    })}
    </section>
  )
}

export default Featured
