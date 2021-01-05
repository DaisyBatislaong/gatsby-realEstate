import React from 'react'
import About from '../components/About'
import ContactHero from '../components/ContactHero'
import Layout from '../components/Layout'
import SubHeader from '../components/SubHeader'

const about = () => {
   return (
    <Layout>
      <SubHeader/>
      <About/>
      <ContactHero/>
    </Layout>
   )
}

export default about
