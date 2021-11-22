import React from 'react';
import Head from 'next/head';
import { Cards } from '../components/Cards';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import Mail from '../components/Mail';
import { PhotoProgram } from '../components/PhotoProgram';
import { Description } from '../components/Description';

export default function banos_ecuador() {
  const cards1 = [
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1634665069/mayotravel/card-rafting-banos-ecuador_dqggg9.jpg',
      category: 'Actividades',
      title: 'Rafting',
      price: '30',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1634665069/mayotravel/card-las-manos-de-dios-banos-ecuador_pgbows.jpg',
      category: 'Actividades',
      title: 'Las Manos de Dios',
      price: '10',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636760444/mayotravel/banos-ecuador-canoning_a2pyfw.jpg',
      category: 'Actividades',
      title: 'Canyoning',
      price: '30',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1634665069/mayotravel/card-casa-del-arbol-banos-ecuador_bdb7kv.jpg',
      category: 'Actividades',
      title: 'La Casa del Arbol ',
      price: '10',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636762220/mayotravel/banos-ecuador-vuelo-condor_qjrpic.jpg',
      category: 'Actividades',
      title: 'El Vuelo del Condor',
      price: '20',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636761247/mayotravel/banos-ecuador-puenting_cu8jsp.jpg',
      category: 'Actividades',
      title: 'Puenting',
      price: '20',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636762599/mayotravel/banos-ecuador-canopy_hql8qe.jpg',
      category: 'Actividades',
      title: 'Canopy',
      price: '20',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636760444/mayotravel/banos-ecuador-parapente_w5ipid.jpg',
      category: 'Actividades',
      title: 'Parapente',
      price: '60',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636761247/mayotravel/banos-ecuador-puente-cristal_fnurdz.jpg',
      category: 'Actividades',
      title: 'El Puente de Cristal',
      price: '20',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636762599/mayotravel/banos-ecuador-mano-pachamama_thvnnc.jpg',
      category: 'Actividades',
      title: 'Mano La Pachamama',
      price: '15',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636760444/mayotravel/banos-ecuador-pailon-diablo_uneiri.jpg',
      category: 'Actividades',
      title: 'El Pailon del Diablo',
      price: '10',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636762873/mayotravel/banos-ecuador-chiva_lm9jrv.jpg',
      category: 'Actividades',
      title: 'Tours en Chiva',
      price: '8',
    },
  ];

  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <title>Tours y Actividades en Baños Ecuador | Mayotravel Guia de Viajes</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Tours y Actividades en Baños Ecuador, que hacer y que visitar en Baños de Agua Santa.'
        />
        <meta
          name='keywords'
          content='baños ecuador, baños, ecuador, rafting, canyoning, puenting, canopy, parapente, casa del arbol, las manos de dios, mirador, mano de la pachamama, vuelo del condor, pailon de l diablo, cascadas, cascada, chivas, tours en chivas, puente de cristal, piscinas'
        />
        <meta name='robots' content='index, follow' />
        <meta property='og:site_name' content='Mayotravel Agencia de Viajes Baños Ecuador' />
        <meta
          property='og:title'
          content='Tours y Actividades en Baños Ecuador | Mayotravel Guia de Viajes'
        />
        <meta
          property='og:description'
          content='Tours y Actividades en Baños Ecuador, que hacer y que visitar en Baños de Agua Santa.'
        />
        <meta property='og:image' content='http://www.mayo-travel.com/assets/images/slider-1.jpg' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='http://www.mayo-travel.com/banos_ecuador' />

        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:description'
          content='Tours y Actividades en Baños Ecuador, que hacer y que visitar en Baños de Agua Santa.'
        />
        <meta
          name='twitter:title'
          content='Tours y Actividades en Baños Ecuador | Mayotravel Guia de Viajes'
        />
        <meta
          name='twitter:image'
          content='https://img.goraymi.com/2018/10/01/a388b3def8c367db18c7901bb5923c3b_xl.jpg'
        />
      </Head>
      <Header />
      <PhotoProgram
        imageTittle='Baños de Agua Santa Ecuador'
        imageUrl='https://res.cloudinary.com/dlypj8ldu/image/upload/v1636925873/mayotravel/banos-ecuador_idryn3.jpg'
        programTittle='Baños Ecuador'
        description='Encanto natural por sus bellos paisajes'
      />
      <Description
        Text1='También conocida como la puerta del Dorado'
        TextDescription='Baños ofrece muchas atracciones: se puede descansar en las
      piscinas de aguas termales, visitar la Basílica,la ruta de las cascadas, obtener unas impresionantes vistas al volcán
      Tungurahua desde algunos miradores de la ciudad, degustar las melcochas y variedades de artesanías .'
        TextPlace='Las zonas más populares de Baños'
      />
      <Cards title='Tours y actividades en Baños de Agua Santa' cards={cards1} />
      <Mail />
      <Footer />
    </div>
  );
}
