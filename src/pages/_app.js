import React from 'react';
import Head from 'next/head';

import './app.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mayotravel - Agencia de Viajes Ecuador</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
      Footer
    </>
  );
}

export default MyApp;
