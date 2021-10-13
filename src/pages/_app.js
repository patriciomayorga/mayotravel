
import './App.css';

function MyApp({ Component, pageProps }) {
    return <>
        Header
        <Component {...pageProps} />
        Footer
    </>
  }

  export default MyApp