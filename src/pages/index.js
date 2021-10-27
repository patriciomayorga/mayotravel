import React from 'react';
import { Baners } from '../components/Baners';
import { Cards } from '../components/Cards';
import Header from '../components/Header';
import Video from '../components/Video';
import { Footer } from '../components/Footer';
import { Cards2 } from '../components/Cards2';

import Mail from '../components/Mail';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Video />
      <Cards />
      <Baners />
      <Cards2 />
      <Mail />
      <Footer />
    </div>
  );
}
