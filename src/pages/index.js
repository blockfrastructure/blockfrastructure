import React from 'react';

import Layout from '@common/Layout';

import Header from '@sections/Header';
import About from '@sections/About';
import Navbar from '@common/Navbar';
import Networks from '@sections/Staked';
// import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Networks />
    {/* <Team /> */}
    <Faq />
    <Footer />
  </Layout>
)

export default IndexPage;
