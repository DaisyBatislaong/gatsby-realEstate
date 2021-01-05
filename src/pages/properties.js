import SubHeader from "../components/SubHeader"
import React from "react"
import Layout from "../components/Layout"
import Properties from "../components/Properties"
import ContactHero from "../components/ContactHero"

const index = () => {
  return (
    <Layout>
      <SubHeader />
      <Properties />
      <ContactHero/>
    </Layout>
  )
}

export default index
