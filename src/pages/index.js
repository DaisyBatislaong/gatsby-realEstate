import React from "react";
import Featured from "../components/Featured";
import Header from "../components/MainHeader";
import Layout from "../components/Layout";
import ContactHero from "../components/ContactHero";

const index = () => {
   return (
      <Layout>
         <Header />
         <Featured />
         <ContactHero />
      </Layout>
   );
};

export default index;
