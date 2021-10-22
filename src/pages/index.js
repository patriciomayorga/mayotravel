import React, { useEffect } from 'react';
import { Baners } from '../components/Baners';
import { Cards } from '../components/Cards';
import Header from '../components/Header';
import Video from '../components/Video';
import { Footer } from '../components/Footer';

import { supabase } from '../lib/supabaseApi';

export default function HomePage() {
  useEffect(() => {
    async function load() {
      const carousels = await supabase.from('Carousels').select('*');
      console.log(carousels);
    }
    load();
  }, []);

  return (
    <div>
      <Header />
      Texto
      <Video />
      <Cards />
      <Baners />
      <Footer />
    </div>
  );
}
