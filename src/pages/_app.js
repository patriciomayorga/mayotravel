import React from 'react';
import './App.css';
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
