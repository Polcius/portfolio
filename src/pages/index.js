import React from 'react';
import Layout from '../components/layout';
import Intro from '../components/Intro';
import SEO from '../components/seo';
import BodyText from '../components/BodyText';

const IndexPage = () => (
  <Layout>
    <SEO title="Pol Milian | Full-Stack Web/UI Engineer" />
    <Intro />
    <BodyText />
  </Layout>
);

export default IndexPage;
