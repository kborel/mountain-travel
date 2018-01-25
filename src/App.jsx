import React from 'react';
import { injectGlobal } from 'styled-components';
import Layout from './components/Layout';
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import Packages from './components/Packages';


injectGlobal`
  @import url ('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  body {
    font-family: sans-serif;
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }
`;

const App = () => (
  <Layout>
    <Hero />
    <Destinations />
    <Packages />
  </Layout>
);

export default App;
