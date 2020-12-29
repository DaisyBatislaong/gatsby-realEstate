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
         <h1 className="title">FEATURED HOUSES</h1>

         <section className="mx-auto grid md:grid-cols-3 gap-5 text-myWhite-200 container">
            {data.houses.nodes.map((house) => {
               return (
                  <Link to={`/properties/${house.itemid}`}>
                     <article key={house.id} className="container relative overflow-hidden">
                        <Image fluid={house.img[0].fluid} alt={house.name.name} style={{ height: "15rem" }} />
                        <div className="absolute -bottom-10 left-4 ">
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
                                       <button className="bg-lightGreen-200 p-2 ml-16 text-myWhite-100 rounded-md">Explore</button>
                                    </Link>
                                 </span>
                              </h5>
                           </div>
                        </div>
                     </article>
                  </Link>
               );
            })}
         </section>
         <div>
            <button>
               <Link to="/properties">View All Properties</Link>
            </button>
         </div>
      </>
   );
};

export default Featured;
