import React from 'react';

import Layout from '@common/Layout';

import Header from '@sections/Header';
import About from '@sections/About';
import Networks from '@sections/Staked';
// import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Networks />
    {/* <Team /> */}
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
