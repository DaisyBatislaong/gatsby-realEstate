import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Link } from "gatsby";

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
   `);
   return (
      <>
         <h1 className="title" data-sal="slide-up" data-sal-delay="1200" data-sal-easing="easeInOutSine">FEATURED HOUSES</h1>

         <section className="sectionHouses" >
            {data.houses.nodes.map((house) => {
               return (
                  <Link to={`/properties/${house.itemid}`} data-sal="zoom-in" data-sal-delay="1200" data-sal-easing="easeInOutQuart">
                     <article key={house.id} className="container relative overflow-hidden" >
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
         <div className="flex justify-center mt-16">
            <button className="button">
               <Link to="/properties">View All Properties</Link>
            </button>
         </div>
      </>
   );
};

export default Featured;
