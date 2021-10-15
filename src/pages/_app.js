import React from 'react';
import './app.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      Footer
    </>
  );
}

export default MyApp;
