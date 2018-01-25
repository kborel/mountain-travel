import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Mountain Travel"
    />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
