import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Intro from '../components/Intro';
import SEO from '../components/seo';
import BodyText from '../components/BodyText';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Intro />
    <BodyText />
  </Layout>
);

export default IndexPage;
