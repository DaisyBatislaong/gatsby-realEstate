import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";

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
   `);
   return (
      <>
         <h1 className="title">ALL PROPERTIES</h1>
         <section className="sectionHouses">
            {data.houses.nodes.map((house) => {
               return (
                  <Link to={`/properties/${house.itemid}`}>
                     <article key={house.id} className="container relative overflow-hidden">
                        <Image fluid={house.img[0].fluid} alt={house.name.name} style={{ height: "15rem" }} />
                        <div className="textOverlay group ">
                           <div className="textContainer ">
                              <h3 className="text-xl">
                                 {house.name.name} | ${house.price}
                              </h3>
                              <div className="mt-1">
                                 <h5>
                                    <span>
                                       {house.bath} Baths | {house.bed} Beds | {house.size}
                                       sq.ft.
                                    </span>
                                    <span>
                                       <Link to={`/properties/${house.itemid}`}>
                                          <button className="houseButton">Explore</button>
                                       </Link>
                                    </span>
                                 </h5>
                              </div>
                           </div>
                        </div>
                     </article>
                  </Link>
               );
            })}
         </section>
      </>
   );
};

export default Properties;
