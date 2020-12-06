const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetHouses {
      houses: allContentfulRealEstate {
        nodes {
          itemid
        }
      }
    }
  `)
  result.data.houses.nodes.forEach(house => {
    createPage({
      path: `/properties/${house.itemid}`,
      component: path.resolve(`src/templates/house-template.js`),
      context: {
        house: house.itemid,
      },
    })
  })
}
