import React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import IndexPage from '@/components/layout/IndexPage';

import Body from './Body';

function Layout({ children }) {
  return (
    <>
      <IndexPage />
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  );
}

export default Layout;
