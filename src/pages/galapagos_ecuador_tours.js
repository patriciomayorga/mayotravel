import React from 'react';
import Head from 'next/head';
import { Cards } from '../components/Cards';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import Mail from '../components/Mail';
import { PhotoProgram } from '../components/PhotoProgram';
import { Description } from '../components/Description';

export default function galapagos_ecuador_tours() {
  const cards1 = [
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1634665069/mayotravel/card-rafting-banos-ecuador_dqggg9.jpg',
      category: 'Actividades',
      title: 'Galápagos Familiar',
      price: '430',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1634665069/mayotravel/card-las-manos-de-dios-banos-ecuador_pgbows.jpg',
      category: 'Actividades',
      title: 'Galápagos Natural',
      price: '450',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636760444/mayotravel/banos-ecuador-canoning_a2pyfw.jpg',
      category: 'Actividades',
      title: 'Galápagos Mágico',
      price: '680',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1634665069/mayotravel/card-casa-del-arbol-banos-ecuador_bdb7kv.jpg',
      category: 'Actividades',
      title: 'Galapago de Lujo',
      price: '890',
    },
  ];

  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <title>
          Galápagos Ecuador | Tours y Actividades en Las Islas Galápagos | Mayotravel Guia de Viajes
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='PAQUETES TODO INCLUIDO, tours y actividades en Las Islas Galápagos Ecuador, que hacer y que visitar en Galápagos.'
        />
        <meta
          name='keywords'
          content='galapagos, galápagos, galapagos ecuador, islas galapagos, tours a galapagos, cruceros, cruceros a galapagos, viajes'
        />
        <meta name='robots' content='noindex, nofollow' />
        <meta property='og:locale' content='es_ES' />
        <meta
          property='og:site_name'
          content='Galápagos Ecuador | Tours y Actividades en Las Islas Galápagos | Mayotravel Guia de Viajes'
        />
        <meta
          property='og:title'
          content='Galápagos Ecuador | Tours y Actividades en Las Islas Galápagos | Mayotravel Guia de Viajes'
        />
        <meta
          property='og:description'
          content='PAQUETES TODO INCLUIDO, tours y actividades en Las Islas Galápagos Ecuador, que hacer y que visitar en Galápagos.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dlypj8ldu/image/upload/v1637111919/mayotravel/galapagos-ecuador_ytfzue.jpg'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='http://www.mayo-travel.com/galapagos_ecuador_tours' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:domain' content='mayotravel' />
        <meta
          name='twitter:description'
          content='PAQUETES TODO INCLUIDO, tours y actividades en Las Islas Galápagos Ecuador, que hacer y que visitar en Galápagos.'
        />
        <meta
          name='twitter:title'
          content='Galápagos Ecuador | Tours y Actividades en Las Islas Galápagos | Mayotravel Guia de Viajes'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/dlypj8ldu/image/upload/v1637111919/mayotravel/galapagos-ecuador_ytfzue.jpg'
        />
      </Head>
      <Header />
      <PhotoProgram
        imageTittle='Galápagos Ecuador'
        imageUrl='https://res.cloudinary.com/dlypj8ldu/image/upload/v1637111919/mayotravel/galapagos-ecuador_ytfzue.jpg'
        programTittle='Galápagos Ecuador'
        description='Las islas encantadas en un mundo mágico'
      />
      <Description
        Text1='También conocida como Las Islas Encantadas'
        TextDescription='La Provincia de Galápagos, es una de las 24 provincias que conforman la 
        República del Ecuador. Está localizada a 1000 km de la costa del Ecuador continental. 
        Su territorio está conformado por el Archipiélago de Colón, también conocido 
        como "Islas Galápagos", del cual adopta su nombre.'
        TextPlace='Las zonas más populares de Galápagos'
      />
      <Cards title='Tours y actividades en Las Islas Galapagos en Ecuador' cards={cards1} />
      <Mail />
      <Footer />
    </div>
  );
}
