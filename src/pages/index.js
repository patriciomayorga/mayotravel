import React from 'react';
import { Baners } from '../components/Baners';
import { Cards } from '../components/Cards';
import Header from '../components/Header';
import Video from '../components/Video';
import { Footer } from '../components/Footer';

import Mail from '../components/Mail';

export default function HomePage() {
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
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1634665069/mayotravel/card-canyoning-banos-ecuador_bnmtfl.jpg',
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
  ];
  const cards2 = [
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1634859956/mayotravel/card-amazonia-ecuador_mq5yyr.jpg',
      category: 'Excursión',
      title: 'Tours en la Amazonia ',
      price: '60',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1634860410/mayotravel/card-pailon-diablo_ivry3z.jpg',
      category: 'Excursión',
      title: 'Pailon del Diablo',
      price: '10',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1634860845/mayotravel/card-quilotoa-ecuador_klvajh.jpg',
      category: 'Excursión',
      title: 'Laguna de Quilotoa',
      price: '50',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/dlypj8ldu/image/upload/v1634860145/mayotravel/card-galapagos-ecuador2_aawidp.jpg',
      category: 'Excursión',
      title: 'Tours a Galápagos',
      price: '320',
    },
  ];
  return (
    <div>
      <Header />
      <Video />
      <Cards title='Disfruta, Baños de Agua Santa' cards={cards1} />
      <Baners />
      <Cards title='Conoce, Ecuador y su Cultura' cards={cards2} />
      <Mail />
      <Footer />
    </div>
  );
}
