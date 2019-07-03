import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import BigLogo from '../components/BigLogo';
import SEO from '../components/seo';
import FacebookIcon from '../images/facebook.png';
import InstagramIcon from '../images/instagram.png';
import DownloadIcon from '../images/download_icon.png';
import GatoGif from '../images/gato.gif';
import Catalogo from '../images/Bagaimana Catalogo 2019 (PVP).pdf';

const Social = styled.section`
  margin-top: 2rem;
  img {
    padding-right: 0.5rem;
  }
  p {
    line-height: 0.3;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Intro = styled(Social)``;
const Footer = styled.footer`
  margin-top: 8rem;
  margin-bottom: 0;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      css="
        width: 100%;
      "
    >
      <BigLogo />
    </div>
    <h1 css="margin: 3rem 0;">Próximamente...</h1>
    <Intro>
      <a href={Catalogo} rel="noopener noreferrer">
        <p>
          <img width="16px" src={DownloadIcon} alt="Descarga" />
          Descarga nuestro catálogo
        </p>
        <img
          css="text-align: center;"
          width="60%"
          src={GatoGif}
          alt="Gato tejiendo GIF"
        />
      </a>
    </Intro>

    <Social>
      <p>
        <a
          href="https://www.facebook.com/bagaimana.bcn"
          rel="noopener noreferrer"
        >
          <img width="16px" src={FacebookIcon} alt="Facebook Icon" />
          Facebook
        </a>
      </p>
      <p>
        <a
          href="https://www.instagram.com/bagaimana.bcn/"
          rel="noopener noreferrer"
        >
          <img width="16px" src={InstagramIcon} alt="Instagram Icon" />
          Instagram
        </a>
      </p>
    </Social>
    <Footer>
      <p>© Bagaimana 2019</p>
    </Footer>
  </Layout>
);

export default IndexPage;
