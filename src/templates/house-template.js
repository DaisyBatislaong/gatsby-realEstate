import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Image from "gatsby-image";
import ContactHero from "../components/ContactHero";

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
   } = data;

   return (
      <Layout>
         <div>
            <Image fluid={img[0].fluid} style={{ width: "100%" }} />
         </div>
         <section className="flex">
            {img.map((image) => {
               return <Image fluid={image.fluid} style={{ width: "10rem", height: "auto" }} />;
            })}
         </section>
         <article className="text-center mt-28">
            <h1 className="font-spacemonoFont text-lightGreen-200 text-6xl">{street}</h1>
            <h4 className="text-gray-500 text-xl my-4">{city}</h4>
            <h2 className="text-2xl ">${price}</h2>
            <h4 className="text-gray-500 text-xl mt-2 mb-6">
               {bath} Baths | {beds} Beds | {size} Sq.Ft.
            </h4>
            <p className="text-sm mx-20">{description}</p>
         </article>
         <ContactHero/>
      </Layout>
   );
};

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
`;

export default ComponentName;
