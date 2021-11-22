import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import Mail from '../components/Mail';
import { PhotoProgram } from '../components/PhotoProgram';
import { Description } from '../components/Description';

export default function hoteles_ecuador() {
  const cards1 = [
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637259037/mayotravel/decameron-mompiche-ecuador_uhdcxf.jpg',
      category: 'Alojamiento',
      title: 'Decameron Mompiche',
      price: '88',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637259170/mayotravel/decameron-punta-centinela-ecuador_mmrfsr.jpg',
      category: 'Alojamiento',
      title: 'Decameron Punta Centinela',
      price: '85',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637259296/mayotravel/decameron-punta-sal-peru_pwsjz3.jpg',
      category: 'Alojamiento',
      title: 'Decameron Punta Sal (Perú)',
      price: '89',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637259770/mayotravel/la-casa-del-suizo-lodge-ecuador_s81vox.jpg',
      category: 'Alojamiento',
      title: 'La Casa del Suizo Lodge',
      price: '95',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637268242/mayotravel/hotel-sangay-banos_c4i1ml.jpg',
      category: 'Alojamiento',
      title: 'Hotel Sangay',
      price: '88',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637269089/mayotravel/hosteria-monte-selva-banos_w39ovc.jpg',
      category: 'Alojamiento',
      title: 'Hosteria Monte Selva',
      price: '85',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637269233/mayotravel/hosteria-luna-volcan_jhvzlb.jpg',
      category: 'Alojamiento',
      title: 'Hosteria Luna Volcán',
      price: '89',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637269233/mayotravel/hosteria-samari-banos_gzlte5.jpg',
      category: 'Alojamiento',
      title: 'Hosteria Samari',
      price: '95',
    },
  ];
  const cards2 = [
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637268242/mayotravel/hotel-sangay-banos_c4i1ml.jpg',
      category: 'Alojamiento',
      title: 'Hotel Sangay',
      price: '88',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637269089/mayotravel/hosteria-monte-selva-banos_w39ovc.jpg',
      category: 'Alojamiento',
      title: 'Hosteria Monte Selva',
      price: '85',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637269233/mayotravel/hosteria-luna-volcan_jhvzlb.jpg',
      category: 'Alojamiento',
      title: 'Hosteria Luna Volcán',
      price: '89',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1637269233/mayotravel/hosteria-samari-banos_gzlte5.jpg',
      category: 'Alojamiento',
      title: 'Hosteria Samari',
      price: '95',
    },
  ];

  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <title>
          Hoteles en Ecuador | Reserva de Hoteles Todo Includio | Mayotravel Guia de Viajes
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
        imageTittle='Hoteles en Ecuador'
        imageUrl='https://res.cloudinary.com/dlypj8ldu/image/upload/v1637257317/mayotravel/hoteles-ecuador_mkge2g.jpg'
        programTittle='Hoteles Ecuador'
        description='Reserva de hoteles en Ecuador'
      />
      <Description
        Text1='Reserva alojamientos y hoteles en Ecuador'
        TextDescription='Descubre una gran variedad de opciones para recorrer este 
        país con todos tus hospedajes listos desde el primer día. 
        Aquí encontrarás distintos tipos de hotel en Ecuador para 
        todos los gustos, hoteles todo incluido y además de los mejores precios.'
        TextPlace='Los hoteles más populares de Ecuador'
      />
      <Cards title='Hoteles y alojamientos en Ecuador' cards={cards1} />
      <Cards title='Hoteles y alojamientos en Baños' cards={cards2} />
      <Mail />
      <Footer />
    </div>
  );
}
