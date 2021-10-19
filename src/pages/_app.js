import React from 'react';
import Head from 'next/head';

import './app.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <title>
          Mayotravel Agencia de Viajes | Baños Ecuador | Galapagos | Rafting | Canyoning | Paquetes
          | Tours | Hoteles | Vuelos Charter | Vacaciones
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Mayotravel es la principal Agencia de Viajes Mayorista en Ecuador, especializada en la organización de tours de aventura en Baños y todo el Ecuador, Reserva de Hoteles, Vuelos Charter, Islas Galápagos y Paquetes Internacionales con el servicio Todo Incluido.'
        />
        <meta
          name='keywords'
          content='Baños Ecuador, Tours a Galapagos, Rafting en Baños Ecuador, Canyoning en Baños Ecuador, Tours, Hoteles, Vuelos Charter, Paquetes, Decameron Mompiche, Tours a Panama, Tours a Cartagena, Tours a Curacao, Tours a Jamaica, Tours a Mexico, Tours a Punta Cana, Tours a San Andres, Cuyabeno Ecuador, Quilotoa Ecuador, Chimborazo Ecuador, Cotopaxi Ecuador, Lodges Ecuador, Mayotravel Agencia de Viajes, Agencias de Viajes Ecuador, Agencias de Viajes Baños, Biking, Tours a Baños'
        />
        <meta name='robots' content='noindex, nofollow' />
        <meta property='og:site_name' content='Mayotravel Agencia de Viajes Baños Ecuador' />
        <meta
          property='og:title'
          content='Mayotravel Agencia de Viajes | Baños Ecuador | Galapagos | Rafting | Canyoning | Paquetes | Tours | Hoteles | Vuelos Charter | Vacaciones'
        />
        <meta
          property='og:description'
          content='Mayotravel es la principal Agencia de Viajes Mayorista en Ecuador, especializada en la organización de tours de aventura en Baños y todo el Ecuador, Reserva de Hoteles, Vuelos Charter, Islas Galápagos y Paquetes Internacionales con el servicio Todo Incluido.'
        />
        <meta property='og:image' content='http://www.mayo-travel.com/assets/images/slider-1.jpg' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='http://www.mayo-travel.com/' />

        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:description'
          content='Mayotravel es la principal Agencia de Viajes Mayorista en Ecuador, especializada en la organización de tours de aventura en Baños y todo el Ecuador, Reserva de Hoteles, Vuelos Charter, Islas Galápagos y Paquetes Internacionales con el servicio Todo Incluido.'
        />
        <meta
          name='twitter:title'
          content='Mayotravel Agencia de Viajes | Baños Ecuador | Galapagos | Rafting | Canyoning | Paquetes | Tours | Hoteles | Vuelos Charter | Vacaciones'
        />
        <meta
          name='twitter:image'
          content='https://img.goraymi.com/2018/10/01/a388b3def8c367db18c7901bb5923c3b_xl.jpg'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
