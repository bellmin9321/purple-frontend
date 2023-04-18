import Head from 'next/head';
import React from 'react';

function IndexPage({ title, description, url, image }) {
  return (
    <Head>
      <title>Purple Frontend</title>
      <meta property="og:title" content={title || 'Purple'} />
      <meta
        name="description"
        content={description || 'Purple Frontend is clone of COMMON-GROUND'}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="bellmin" />
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <link rel="icon" />
    </Head>
  );
}

export default IndexPage;
