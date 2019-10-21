import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import '../styles/global.css';
import BgImage from '../images/cream_pixels.png';

// TODO: https://www.getwelly.com/ animacions text, underline https://www.nadiaux.design/, https://dgattoni.github.io/

const Layout = ({ children }) => (
  <>
    <main className="container">{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
