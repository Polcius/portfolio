import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Normalize } from 'styled-normalize'

const theme = {
  lightBlack: '#2d2d2d',
  gold: '#e2bd80',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap');

  body {
    font-family: 'Libre Baskerville', serif;
    margin: 0;
    background-color: ${theme.lightBlack};
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const Main = styled(animated.main)`
  max-width: 38rem;
  padding: 2rem;
  margin: auto;
  text-align: center;
  color: ${theme.gold};
`;

const Layout = ({ children }) => {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  });
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Main style={animation}>{children}</Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
