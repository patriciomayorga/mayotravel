import React from 'react';
import { Baners } from '../components/Baners';
import { Cards } from '../components/Cards';
import Header from '../components/Header';
import Video from '../components/Video';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Video />
      <Cards />
      <Baners />
    </div>
  );
}
