import React from 'react'
import Featured from '../components/Featured'
import Header from '../components/Header'
import Layout from '../components/Layout'


const index = () => {
  return (
    <Layout>
      <Header/>
      <h1>FEATURED HOUSES</h1>
      <Featured/>
    </Layout>
  )
}

export default index
