import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
      <section >
        {data.houses.nodes.map(house => {
          return (
            <Link to={`/properties/${house.itemid}`}>
              <article key={house.id} >
                <Image
                  fluid={house.img[0].fluid}
                  alt={house.name.name}
                  
                />
                <div >
                  <h3>
                    {house.name.name} | ${house.price}
                  </h3>
                  <div >
                    <h5>
                      <span >
                        {house.bath} Baths | {house.bed} Beds | {house.size}{" "}
                        sq.ft.
                      </span>
                      <span>
                        <Link to={`/properties/${house.itemid}`}>
                          <button> Explore</button>
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
    </>
  )
}

export default Properties
