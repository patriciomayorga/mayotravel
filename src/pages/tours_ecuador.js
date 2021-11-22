import React from 'react';
import Head from 'next/head';
import { Cards } from '../components/Cards';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import Mail from '../components/Mail';
import { PhotoProgram } from '../components/PhotoProgram';
import { Description } from '../components/Description';

export default function tours_ecuador() {
  const cards1 = [
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636844932/mayotravel/climbing-cotopaxi-ecuador_zqwucs.jpg',
      category: 'Actividades',
      title: 'Climbing Cotopaxi',
      price: '350',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636844932/mayotravel/climbing-chimborazo-ecuador_f9ayg3.jpg',
      category: 'Actividades',
      title: 'Climbing Chimborazo',
      price: '380',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636844932/mayotravel/climbing-cayambe--ecuador_lmojbt.jpg',
      category: 'Actividades',
      title: 'Climbing Cayambe',
      price: '250',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1636844932/mayotravel/climbing-tungurahua-ecuador_jx4cdg.jpg',
      category: 'Actividades',
      title: 'Climbing Tungurahua ',
      price: '150',
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
        <title>Tours y Actividades en Ecuador | Mayotravel Guia de Viajes</title>
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
        imageTittle='Ecuador- Sudamérica'
        imageUrl='https://res.cloudinary.com/dlypj8ldu/image/upload/v1637112989/mayotravel/ecuador4_y1iowv.jpg'
        programTittle='Ecuador- Sudamérica'
        description='Tours y actividades en Ecuador'
      />
      <Description
        Text1=' Inicialmente denominado Real Audiencia de Quito'
        TextDescription='Ecuador, está ubicado sobre la línea ecuatorial, en América del Sur, por lo cual su territorio se encuentra en ambos hemisferios. Limita al norte con Colombia y al sur y al este con Perú. Al oeste limita con el Océano Pacífico. Está dividido en cuatro regiones, en las que se distribuyen 24 provincias.'
        TextPlace='Las zonas más populares de Ecuador'
      />
      <Cards title='Tours y actividades en Ecuador' cards={cards1} />
      <Mail />
      <Footer />
    </div>
  );
}
