import React from 'react';
import PropTypes from 'prop-types';
import '../styles/global.css';

// TODO: https://www.getwelly.com/ animacions text, underline https://www.nadiaux.design/, https://dgattoni.github.io/

const Layout = ({ children }) => (
  <div>
    <main className="container font-body p-12 lg:p-24">{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
