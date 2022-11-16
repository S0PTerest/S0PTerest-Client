import React from 'react';
import { GlobalStyle } from './styles/global';
import Router from './components/router';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Router />
    </Layout>
  );
}

export default App;
