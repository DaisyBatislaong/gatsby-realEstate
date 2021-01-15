/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
   /* Your site config here */
   siteMetadata: {
      author: "DTechImperium",
   },
   plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-styled-components`,
      "gatsby-plugin-postcss",
      `gatsby-plugin-scroll-reveal`,
      {
         resolve: `gatsby-source-contentful`,
         options: {
            spaceId: `c2jlpkowjo08`,
            // Learn about environment variables: https://gatsby.dev/env-vars
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/img/`,
         },
      },
   ],
   pathPrefix: `/gatsby-realEstate`,
};
