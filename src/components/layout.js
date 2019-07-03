import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Normalize } from 'styled-normalize';

const theme = {
  darkBlack: '#1B1B1B',
  lightBlack: '#3C3C3C',
  primary: '#29D396',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu|Vollkorn&display=swap');

  body {
    font-family: 'Vollkorn', serif;
    font-size: 16px;
    margin: 0;
    color: ${theme.lightBlack};
    font-size: 1rem;
  }
`;

const Main = styled(animated.main)`
  max-width: 38rem;
  padding: 32px 48px;
  margin: auto;
  font-size: 24px;
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
      <ThemeProvider theme={theme}>
        <Main style={animation}>{children}</Main>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
